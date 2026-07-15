export default function AdminLayout({ children }) {
  return (
    <div className="min-h-[80vh] pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-zinc-100">Project Delivery System</span>
          <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">ADMIN PANEL</span>
        </div>
      </div>
      <main className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
