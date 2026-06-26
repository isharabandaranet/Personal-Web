import { FolderLock, Download, FileArchive } from "lucide-react";


export default function ClientDeliveryPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="w-full max-w-xl mx-auto">
        <div className="glass-panel p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">

          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent" />

          {/* Icon Header */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
              <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center relative z-10 backdrop-blur-md">
                <FolderLock className="w-8 h-8 text-zinc-100" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-50 tracking-tight mb-4 text-gradient">
              Your Design Project is Ready
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto">
              Download your high-resolution print-ready files and the original source files below.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mb-10">
            {/* Primary Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=10eyf3lRUgRpeJbAVr-xDtFALc0s8Sheh"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-zinc-100 hover:bg-white text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] group/btn"
            >
              <div className="flex items-center gap-4">
                <div className="bg-zinc-200/50 p-2.5 rounded-xl group-hover/btn:bg-zinc-200 transition-colors">
                  <Download className="w-6 h-6 text-zinc-900" strokeWidth={2} />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-base md:text-lg">Download High-Res PNG</div>
                  <div className="text-sm font-medium text-zinc-500 mt-0.5">300 DPI | Print Ready</div>
                </div>
              </div>
            </a>

            {/* Secondary Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1Hwmq-Y6QqsHfKOnJlXl71XcN_-fZruBn"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-transparent border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/30 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group/btn"
            >
              <div className="flex items-center gap-4">
                <div className="bg-zinc-800/50 p-2.5 rounded-xl group-hover/btn:bg-zinc-700/50 transition-colors">
                  <FileArchive className="w-6 h-6 text-zinc-300" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-base md:text-lg text-zinc-200">Download Source PSD</div>
                  <div className="text-sm text-zinc-500 mt-0.5">Fully Layered File</div>
                </div>
              </div>
            </a>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-6 border-t border-zinc-800/50">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">
              This is a secure, private link. Please do not share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
