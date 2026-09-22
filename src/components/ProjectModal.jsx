import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-[#0d1017] border border-indigo-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#111520] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">
              preview://{project.title.toLowerCase().replace(/\s+/g, '')}.console
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin">
          {/* Hero Visual Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video sm:aspect-[21/9] flex items-center justify-center group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-transparent to-transparent opacity-80" />

            {/* Overlay Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={`text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-md shadow-lg ${project.badgeColor}`}>
                {project.badge}
              </span>
            </div>

            {/* Quick Launch Overlay Button */}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow-lg"
            >
              <span>Launch Live Site</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Project Header Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-indigo-300 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Telemetry / Console View (Specific to each project) */}
          {project.title === "LEO WATCH" && (
            <div className="p-4 rounded-2xl bg-[#121622] border border-indigo-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-indigo-300 border-b border-white/5 pb-2">
                <span>🛰️ ORBITAL TELEMETRY CONSOLE</span>
                <span className="text-emerald-400">STATUS: ACTIVE SGP4</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-mono">ORBIT ALTITUDE</div>
                  <div className="font-bold text-white font-mono mt-0.5">542.8 km</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-mono">VELOCITY</div>
                  <div className="font-bold text-white font-mono mt-0.5">7.61 km/s</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-mono">CONJUNCTION RISK</div>
                  <div className="font-bold text-amber-400 font-mono mt-0.5">1.42 × 10⁻⁵</div>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-slate-400 font-mono">INCLINATION</div>
                  <div className="font-bold text-white font-mono mt-0.5">51.64°</div>
                </div>
              </div>
            </div>
          )}

          {project.title === "LifeQuest" && (
            <div className="p-4 rounded-2xl bg-[#121622] border border-purple-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-purple-300 border-b border-white/5 pb-2">
                <span>⚔️ RPG HERO PROGRESSION HUD</span>
                <span className="text-amber-400">LEVEL 4 ADVENTURER</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-300 font-medium">
                  <span>Experience Progress</span>
                  <span className="font-mono text-purple-300">1,450 / 2,000 XP</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-[72%]" />
                </div>
              </div>
            </div>
          )}

          {project.title === "Chef Groq" && (
            <div className="p-4 rounded-2xl bg-[#121622] border border-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-300 border-b border-white/5 pb-2">
                <span>🍳 AI INFERENCE ENGINE METRICS</span>
                <span className="text-emerald-400">GROQ CLOUD • LLAMA 3</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Average Inference Latency</span>
                <span className="font-mono text-emerald-400 font-bold">~180ms</span>
              </div>
            </div>
          )}

          {/* Team Role Block */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs">
            <div className="text-slate-200 font-medium">
              ⚡ My Contribution: <span className="text-white font-semibold">{project.role}</span>
            </div>
            <div className="text-slate-400 text-xs leading-relaxed">
              {project.team}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Capabilities</h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-indigo-400 font-bold mt-0.5">✦</span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 bg-[#10131d] border-t border-white/10 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-white/20 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Code</span>
            </a>
          )}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-1.5 shadow-md"
          >
            <span>{project.demoLabel}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
