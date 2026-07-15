"use client";

import { useState, useEffect } from "react";
import { auth } from "../../../lib/firebase";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Loader2, Fingerprint, User, AlertCircle } from "lucide-react";

export default function ClientLoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/client/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      // onAuthStateChanged will handle the redirect
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "Failed to log in with Google. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="glass-panel p-10 rounded-3xl text-center max-w-md w-full border border-zinc-800/50 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/50 to-blue-500/50" />
        
        <div className="w-20 h-20 bg-zinc-900 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-zinc-800 shadow-inner">
          <Fingerprint className="w-10 h-10 text-indigo-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-zinc-50 mb-3">Client Portal</h1>
        <p className="text-zinc-400 mb-8 text-sm">
          Sign in to access your purchased projects, source files, and downloads securely from any device.
        </p>
        
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-xs text-red-300">{error}</p>
          </div>
        )}

        <button 
          onClick={handleGoogleLogin} 
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-3 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold px-6 py-4 rounded-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <User className="w-5 h-5" />
              Continue with Google
            </>
          )}
        </button>
        
        <p className="text-xs text-zinc-600 mt-6">
          By signing in, you agree to our terms of service and privacy policy. Your data is strictly secure.
        </p>
      </div>
    </div>
  );
}
