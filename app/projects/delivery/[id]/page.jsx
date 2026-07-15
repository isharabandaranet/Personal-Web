"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Script from "next/script";
import { Download, CheckCircle, ShieldCheck, FileZip, FileType2, FileCode2, ChevronRight, Lock, Key, FolderLock, Loader2, Image as ImageIcon, Video, Mail, CheckCircle2, AlertCircle, User, LogOut } from 'lucide-react';
import { getProjectById, markAsPaid, markAsDownloaded } from "../actions";
import { auth } from "../../../../lib/firebase";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

export default function DynamicClientDeliveryPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const [user, setUser] = useState(null);
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  
  const [isPaid, setIsPaid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (!id) return;
      const data = await getProjectById(id);
      setProject(data);
      
      if (data) {
        // Unlock if globally paid (legacy support)
        if (data.paymentStatus === "Paid" && (!data.unlockedBy || data.unlockedBy.length === 0)) {
          setIsPaid(true);
          // Auto claim if logged in
          if (currentUser) {
            markAsPaid(id, currentUser.email).catch(console.error);
          }
        }
        // Unlock if user is in unlockedBy array
        else if (currentUser && data.unlockedBy && data.unlockedBy.includes(currentUser.email)) {
          setIsPaid(true);
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      showToast("Signed in successfully!");
    } catch (error) {
      console.error("Firebase Login Error:", error);
      showToast(`Failed to sign in: ${error.message}`, "error");
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleDownload = async (url) => {
    try {
      showToast("Your download started, thank you!");
      await markAsDownloaded(id);
    } catch (e) {
      console.error(e);
    }
    // The anchor tag will handle the actual navigation/download
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-white"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  }

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="glass-panel p-10 rounded-3xl text-center max-w-md border border-zinc-800/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 to-orange-500/50" />
          <div className="w-20 h-20 bg-zinc-900 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-zinc-800">
            <FolderLock className="w-10 h-10 text-zinc-500" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-3">Project Not Found</h2>
          <p className="text-zinc-400 mb-8">The delivery link you followed is invalid, expired, or has been removed.</p>
          <a href="/" className="inline-block bg-zinc-100 hover:bg-white text-zinc-950 font-medium px-6 py-3 rounded-xl transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  // Pricing configuration
  const basePrice = project.price;
  const payhereFeePercentage = 0.033;
  const processingFee = Math.round(basePrice * payhereFeePercentage);
  const totalAmount = basePrice + processingFee;
  const orderId = `PRJ-${id}`;

  const handlePayment = async () => {
    if (!customer.firstName || !customer.email || !customer.phone) {
      showToast("Please fill in your first name, email, and phone number.", "error");
      return;
    }

    if (!window.payhere) {
      showToast("Payment gateway is still loading. Please wait a moment.", "error");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/payhere/hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_id: orderId,
          amount: totalAmount,
          currency: "LKR"
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to generate payment hash");

      const payment = {
        sandbox: process.env.NEXT_PUBLIC_PAYHERE_SANDBOX === "true",
        merchant_id: process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
        return_url: typeof window !== "undefined" ? window.location.href : "", 
        cancel_url: typeof window !== "undefined" ? window.location.href : "",
        notify_url: "https://isharabandara.com/api/payhere/notify",
        order_id: orderId,
        items: `${project.title} (ID: ${id})`,
        amount: data.amount,
        currency: "LKR",
        hash: data.hash, 
        first_name: customer.firstName,
        last_name: customer.lastName || "N/A",
        email: customer.email,
        phone: customer.phone,
        address: "N/A",
        city: "N/A",
        country: "Sri Lanka"
      };

      window.payhere.onCompleted = async function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        setIsPaid(true);
        setIsProcessing(false);
        showToast("Payment successful! Files unlocked.");
        if (user) {
          await markAsPaid(id, user.email);
        } else {
          await markAsPaid(id);
        }
      };

      window.payhere.onDismissed = function onDismissed() {
        console.log("Payment dismissed");
        setIsProcessing(false);
      };

      window.payhere.onError = function onError(error) {
        console.log("Error:" + error);
        showToast("Payment error: " + error, "error");
        setIsProcessing(false);
      };

      window.payhere.startPayment(payment);

    } catch (error) {
      console.error("Payment initiation failed:", error);
      showToast("Failed to initiate payment. Please try again later.", "error");
      setIsProcessing(false);
    }
  };

  const verifyCoupon = async () => {
    if (!couponCode) return;
    setIsVerifyingCoupon(true);
    setCouponError("");

    try {
      if (couponCode.toUpperCase() === project.couponCode.toUpperCase()) {
         setIsPaid(true);
         showToast("Passcode accepted! Files unlocked.");
         if (user) {
           await markAsPaid(id, user.email);
         } else {
           await markAsPaid(id);
         }
      } else {
         setCouponError("Invalid passcode for this project.");
      }
    } catch (error) {
      setCouponError("An error occurred. Please try again.");
    } finally {
      setIsVerifyingCoupon(false);
    }
  };

  return (
    <>
      <Script src="https://www.payhere.lk/lib/payhere.js" strategy="lazyOnload" />

      {toast && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-preloader-fade-in z-50 ${toast.type === 'error' ? 'bg-red-500/90 text-white' : 'glass-panel text-zinc-100 border border-zinc-700/50'}`}>
          {toast.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          <p className="font-medium">{toast.message}</p>
        </div>
      )}

      <div className="min-h-screen flex flex-col items-center justify-start px-4 py-16 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/20 to-transparent" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-zinc-800/50 p-2 rounded-lg backdrop-blur-sm">
                  <ImageIcon className="w-5 h-5 text-zinc-300" />
                </div>
                <h2 className="text-xl font-semibold text-zinc-100">Project Preview</h2>
              </div>
              
              {(() => {
                let pImage = project.previewImage;
                if (pImage && pImage.includes("drive.google.com/file/d/")) {
                  const match = pImage.match(/\/d\/([a-zA-Z0-9_-]+)/);
                  if (match && match[1]) {
                    pImage = `https://drive.google.com/uc?export=view&id=${match[1]}`;
                  }
                }
                return pImage ? (
                  <div className="relative aspect-video rounded-2xl border border-zinc-800/50 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pImage} alt="Project Preview" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-zinc-900 rounded-2xl border border-zinc-800/50 overflow-hidden flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-900/80 z-0" />
                    <div className="z-10 text-center p-6 text-zinc-400">
                      <Video className="w-10 h-10 mx-auto mb-3 opacity-50" />
                      <p className="font-medium text-zinc-300">{project.title}</p>
                      <p className="text-sm mt-2 max-w-xs mx-auto">No preview image provided for this project.</p>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between shadow-lg">
              <div>
                <h3 className="text-zinc-200 font-medium mb-1">Need Assistance?</h3>
                <p className="text-sm text-zinc-500">Reach out if you have any feedback or issues.</p>
              </div>
              <a href="/contact" className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-xl transition-colors text-sm font-medium">
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

              {!user ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-indigo-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                    <Lock className="w-8 h-8 text-indigo-400" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-2xl font-semibold text-zinc-50 mb-3">Sign in to Access</h1>
                  <p className="text-zinc-400 text-sm max-w-sm mb-8">
                    Please sign in with your Google account to unlock this project. Once unlocked, it will be permanently linked to your account.
                  </p>
                  <button 
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-3 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
                  >
                    <User className="w-5 h-5" />
                    Sign in with Google
                  </button>
                </div>
              ) : !isPaid ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center relative backdrop-blur-md shadow-inner">
                      <Lock className="w-6 h-6 text-zinc-300" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-zinc-50 tracking-tight mb-2">
                      Unlock Project Files
                    </h1>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Complete the payment to access your high-resolution original source files for <strong>{project.title}</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-2xl p-5 mb-8 border border-zinc-800/50">
                    <div className="flex justify-between items-center mb-3 text-sm text-zinc-400">
                      <span>Project Fee</span>
                      <span className="font-medium text-zinc-300">LKR {basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-sm text-zinc-400">
                      <span>Gateway Fee (3.3%)</span>
                      <span className="font-medium text-zinc-300">LKR {processingFee.toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-zinc-800 mb-4" />
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-zinc-200">Total Amount</span>
                      <span className="text-xl font-bold text-gradient">LKR {totalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="First Name" value={customer.firstName} onChange={e => setCustomer({...customer, firstName: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" />
                      <input type="text" placeholder="Last Name" value={customer.lastName} onChange={e => setCustomer({...customer, lastName: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" />
                    </div>
                    <input type="email" placeholder="Email Address" value={customer.email} onChange={e => setCustomer({...customer, email: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" />
                    <input type="tel" placeholder="Phone Number" value={customer.phone} onChange={e => setCustomer({...customer, phone: e.target.value})} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" />
                  </div>

                  <button onClick={handlePayment} disabled={isProcessing} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] mb-6">
                    {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : <><ShieldCheck className="w-5 h-5" />Pay LKR {totalAmount.toLocaleString()} securely</>}
                  </button>

                  <div className="pt-6 border-t border-zinc-800/50">
                    <p className="text-xs text-zinc-500 mb-3 text-center">Paid via Bank Transfer? Enter passcode</p>
                    <div className="flex gap-2">
                      <input type="password" placeholder="Passcode..." value={couponCode} onChange={e => setCouponCode(e.target.value)} className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600" />
                      <button onClick={verifyCoupon} disabled={isVerifyingCoupon || !couponCode} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors disabled:opacity-50">
                        {isVerifyingCoupon ? <Loader2 className="w-4 h-4 animate-spin" /> : "Verify"}
                      </button>
                    </div>
                    {couponError && <p className="text-red-400 text-xs mt-2 text-center">{couponError}</p>}
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in zoom-in-95 duration-700 py-4">
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                      <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-green-500/30 flex items-center justify-center relative z-10 backdrop-blur-md">
                        <CheckCircle2 className="w-8 h-8 text-green-400" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                    <div className="text-left flex-1 min-w-0 pr-4">
                      <h1 className="text-2xl md:text-3xl font-semibold text-zinc-50 tracking-tight mb-2">
                        Project Files Unlocked
                      </h1>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed break-words">
                        Ready for download. Linked securely to {user?.email}.
                      </p>
                    </div>
                    <Link href="/client/dashboard" className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-sm font-medium rounded-xl transition-colors shrink-0 flex items-center gap-2">
                      View Dashboard
                    </Link>
                  </div>

                  <div className="flex flex-col gap-4">
                    {project.downloads?.map((dl, idx) => {
                      // Convert Google Drive view links to direct download links
                      let downloadUrl = dl.url;
                      if (downloadUrl.includes("drive.google.com/file/d/")) {
                        const match = downloadUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
                        if (match && match[1]) {
                          downloadUrl = `https://drive.google.com/uc?export=download&id=${match[1]}`;
                        }
                      }
                      
                      return (
                      <a 
                        key={idx} 
                        href={downloadUrl} 
                        onClick={() => handleDownload(downloadUrl)}
                        download 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-between p-4 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] group/btn"
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-zinc-200/50 p-2.5 rounded-xl group-hover/btn:bg-zinc-200 transition-colors">
                            <Download className="w-5 h-5 text-zinc-900" strokeWidth={2} />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-sm md:text-base">{dl.title}</div>
                            {dl.subtitle && <div className="text-xs font-medium text-zinc-500 mt-0.5">{dl.subtitle}</div>}
                          </div>
                        </div>
                      </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
