"use client";

import { useState, useEffect } from "react";
import { createDelivery, getDeliveries, deleteDelivery, updateDelivery } from "../actions";
import { Loader2, Plus, Copy, CheckCircle2, Lock, Trash2, Edit2, AlertCircle, RefreshCw, FolderLock } from "lucide-react";

export default function AdminDeliveriesPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' }
  
  // Form State
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  
  // Downloads State (supporting multiple)
  const [downloads, setDownloads] = useState([{ title: "", subtitle: "", url: "" }]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await getDeliveries(password);
      if (res.success) {
        setProjects(res.deliveries);
        setIsAuthenticated(true);
        showToast("Logged in successfully");
      } else {
        showToast(res.error || "Login failed", "error");
      }
    } catch (error) {
      showToast(error.message || "An unexpected error occurred", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const loadProjects = async () => {
    const res = await getDeliveries(password);
    if (res.success) setProjects(res.deliveries);
  };

  const handleAddDownload = () => {
    setDownloads([...downloads, { title: "", subtitle: "", url: "" }]);
  };

  const handleDownloadChange = (index, field, value) => {
    const newDownloads = [...downloads];
    newDownloads[index][field] = value;
    setDownloads(newDownloads);
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle(""); 
    setPrice(""); 
    setCouponCode(""); 
    setPreviewImage("");
    setDownloads([{ title: "", subtitle: "", url: "" }]);
  };

  const handleEdit = (proj) => {
    setEditingId(proj.id);
    setTitle(proj.title);
    setPrice(proj.price.toString());
    setCouponCode(proj.couponCode);
    setPreviewImage(proj.previewImage || "");
    setDownloads(proj.downloads?.length ? proj.downloads : [{ title: "", subtitle: "", url: "" }]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project? This action cannot be undone.")) return;
    try {
      const res = await deleteDelivery(id, password);
      if (res.success) {
        showToast("Project deleted successfully");
        if (editingId === id) resetForm();
        loadProjects();
      }
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = {
        title,
        price: Number(price),
        couponCode,
        previewImage,
        downloads: downloads.filter(d => d.title && d.url) // Filter out empty rows
      };
      
      if (editingId) {
        const res = await updateDelivery(editingId, data, password);
        if (res.success) {
          showToast("Project updated successfully!");
          resetForm();
          loadProjects();
        }
      } else {
        const res = await createDelivery(data, password);
        if (res.success) {
          showToast("Project created successfully!");
          resetForm();
          loadProjects();
        }
      }
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const copyLink = (id) => {
    const link = `${window.location.origin}/projects/delivery/${id}`;
    
    // Fallback for non-https contexts (like accessing via local IP)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(link);
      showToast("Client link copied to clipboard!");
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = link;
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast("Client link copied to clipboard!");
      } catch (error) {
        showToast("Failed to copy link. Please copy manually.", "error");
      } finally {
        textArea.remove();
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="glass-panel p-8 rounded-2xl w-full max-w-md relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
          <div className="flex justify-center mb-6 mt-2">
            <div className="p-4 bg-zinc-900/80 rounded-2xl border border-zinc-800 shadow-inner">
              <Lock className="w-8 h-8 text-zinc-300" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>
          <p className="text-zinc-400 text-sm text-center mb-8">Enter your master password to access the delivery system.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 focus:outline-none focus:border-blue-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-3 rounded-xl transition-all flex justify-center items-center gap-2 active:scale-[0.98]"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Access Dashboard"}
            </button>
          </form>
        </div>
        
        {/* Toast Notification for Login */}
        {toast && (
          <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-preloader-fade-in z-50 ${toast.type === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-500' : 'bg-zinc-800 border border-zinc-700 text-zinc-100'}`}>
            {toast.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            <p className="font-medium">{toast.message}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-preloader-fade-in z-50 ${toast.type === 'error' ? 'bg-red-500/90 text-white' : 'glass-panel text-zinc-100 border border-zinc-700/50'}`}>
          {toast.type === 'error' ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          <p className="font-medium">{toast.message}</p>
        </div>
      )}

      {/* Form Section */}
      <div className="lg:col-span-5">
        <div className="glass-panel p-6 rounded-2xl sticky top-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              {editingId ? <Edit2 className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-emerald-400" />} 
              {editingId ? "Edit Project Delivery" : "Add New Project"}
            </h2>
            {editingId && (
              <button onClick={resetForm} className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1.5 rounded-lg transition-colors">
                Cancel Edit
              </button>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Project Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-200 focus:border-zinc-600 focus:outline-none transition-colors" placeholder="e.g. Brand Identity Pack" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Base Price (LKR)</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-200 focus:border-zinc-600 focus:outline-none transition-colors" placeholder="15000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Coupon/Passcode</label>
                <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-200 focus:border-zinc-600 focus:outline-none transition-colors" placeholder="BANKTRANSFER..." />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">Preview Image URL</label>
              <input type="url" value={previewImage} onChange={e => setPreviewImage(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-zinc-200 focus:border-zinc-600 focus:outline-none transition-colors" placeholder="https://..." />
            </div>
            
            <div className="pt-4 border-t border-zinc-800/50">
              <label className="block text-sm font-medium text-zinc-300 mb-3">Download Links</label>
              {downloads.map((dl, idx) => (
                <div key={idx} className="bg-zinc-900/50 p-4 rounded-xl mb-3 space-y-3 border border-zinc-800/50">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Title (e.g. High-Res PNGs)" value={dl.title} onChange={e => handleDownloadChange(idx, "title", e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:border-zinc-600 focus:outline-none" />
                    <input type="text" placeholder="Subtitle (e.g. 300 DPI Print)" value={dl.subtitle} onChange={e => handleDownloadChange(idx, "subtitle", e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:border-zinc-600 focus:outline-none" />
                  </div>
                  <input type="url" placeholder="Google Drive / Cloud URL" value={dl.url} onChange={e => handleDownloadChange(idx, "url", e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:border-zinc-600 focus:outline-none" />
                </div>
              ))}
              <button type="button" onClick={handleAddDownload} className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"><Plus className="w-4 h-4"/> Add another link</button>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold py-3 rounded-xl transition-all flex justify-center items-center gap-2 active:scale-[0.98] mt-4">
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : editingId ? "Update Project" : "Create Project Delivery"}
            </button>
          </form>
        </div>
      </div>

      {/* Projects List */}
      <div className="lg:col-span-7">
        <div className="glass-panel p-6 rounded-2xl min-h-[500px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Deliveries</h2>
            <button onClick={loadProjects} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-zinc-200" title="Refresh">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            {projects.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
                <FolderLock className="w-12 h-12 mb-4 opacity-50" />
                <p>No project deliveries found.</p>
                <p className="text-sm mt-1">Create one using the form to get started.</p>
              </div>
            ) : (
              projects.map(proj => (
                <div key={proj.id} className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-600 transition-colors group">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg text-zinc-100">{proj.title}</h3>
                        {/* Status Badges */}
                        <span className="px-2 py-0.5 rounded text-xs font-bold tracking-wide bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {proj.downloadCount || 0} Downloads
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-zinc-400">
                        <span>LKR {proj.price.toLocaleString()}</span>
                        <span>Passcode: <code className="text-zinc-300 bg-zinc-800/80 px-1.5 py-0.5 rounded border border-zinc-700/50">{proj.couponCode}</code></span>
                      </div>
                      <div className="text-xs text-zinc-500 mt-3 font-mono">
                        {new Date(proj.createdAt).toLocaleDateString()} • ID: {proj.id}
                      </div>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => copyLink(proj.id)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                      >
                        <Copy className="w-4 h-4" /> Link
                      </button>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(proj)}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-blue-500/20 hover:text-blue-400 text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                          title="Edit Project"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(proj.id)}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-red-500/20 hover:text-red-400 text-zinc-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
