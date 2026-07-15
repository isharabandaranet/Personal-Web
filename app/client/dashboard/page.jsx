"use client";

import { useState, useEffect } from "react";
import { auth } from "../../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getProjectDeliveriesForUser } from "../../admin/actions";
import { Loader2, LogOut, Package, ArrowRight, FolderLock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ClientDashboardPage() {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/client/login");
        return;
      }
      setUser(currentUser);
      
      try {
        const res = await getProjectDeliveriesForUser(currentUser.email);
        if (res.success) {
          setProjects(res.deliveries);
        }
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/client/login");
  };

  if (isLoading) {
    return <div className="min-h-screen flex flex-col items-center justify-center text-zinc-400"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-[80vh] px-4 py-12 md:py-20 max-w-6xl mx-auto relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-zinc-800/50 pb-8">
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.photoURL} alt={user.displayName} className="w-14 h-14 rounded-full border border-zinc-700/50" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-zinc-400 border border-zinc-700/50">
              {user.email?.[0].toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-zinc-50">{user.displayName || "Client Dashboard"}</h1>
            <p className="text-sm text-zinc-400">{user.email}</p>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 hover:bg-zinc-800 transition-all text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-zinc-200 flex items-center gap-2">
          <Package className="w-5 h-5 text-indigo-400" />
          Your Unlocked Projects
        </h2>

        {projects.length === 0 ? (
          <div className="glass-panel rounded-3xl p-12 text-center border border-dashed border-zinc-700 flex flex-col items-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
              <FolderLock className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-lg font-medium text-zinc-300 mb-2">No Projects Found</h3>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto">
              You haven&apos;t unlocked any projects yet. If you have a delivery link, please follow it and complete the payment or enter the passcode to link it to your account.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(proj => (
              <div key={proj.id} className="glass-panel p-5 rounded-2xl border border-zinc-800/50 hover:border-indigo-500/30 transition-all duration-300 group flex flex-col">
                {proj.previewImage ? (
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={proj.previewImage} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-xl mb-4 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Package className="w-8 h-8 text-zinc-700" />
                  </div>
                )}
                
                <h3 className="font-semibold text-lg text-zinc-100 mb-1">{proj.title}</h3>
                <p className="text-xs text-zinc-500 mb-6 flex-grow">
                  Purchased/Unlocked on: {new Date(proj.paidAt || proj.createdAt).toLocaleDateString()}
                </p>
                
                <Link 
                  href={`/projects/delivery/${proj.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800/50 hover:bg-indigo-600 text-zinc-300 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium border border-zinc-700/50 hover:border-indigo-500"
                >
                  Access Files <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
