import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  FileDown,
  MapPin,
  Code2,
  Database,
  Server,
  Layers,
  Copy,
  Check,
  Play,
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onOpenResumeModal: () => void;
}

const codeSnippets = {
  frontend: {
    filename: 'TelemetryFeed.tsx',
    lang: 'tsx',
    badge: 'React 19 + TypeScript',
    code: `// Scalable Component with Custom Hook State
export const TelemetryFeed: React.FC<{ deviceId: string }> = ({ deviceId }) => {
  const { data, isLoading } = useTelemetryStream(deviceId);

  if (isLoading) return <LoadingSkeleton count={3} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.metrics.map((m) => (
        <MetricCard 
          key={m.id} 
          label={m.label} 
          value={m.value} 
          trend={m.trend} 
        />
      ))}
    </div>
  );
};`,
  },
  backend: {
    filename: 'api/devices.router.ts',
    lang: 'ts',
    badge: 'Node.js + Express',
    code: `// Clean Express Controller with Typed Middleware
router.get(
  '/api/v1/devices/:id/telemetry',
  authenticateToken,
  validateRequest(TelemetryQuerySchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { timeframe = '24h' } = req.query;
      const metrics = await telemetryService.getAggregated(id, timeframe);
      
      return res.status(200).json({ success: true, data: metrics });
    } catch (err) {
      next(err);
    }
  }
);`,
  },
  database: {
    filename: 'schema.sql',
    lang: 'sql',
    badge: 'PostgreSQL / MySQL Schema',
    code: `-- Normalized relational schema with compound indexing
CREATE TABLE IF NOT EXISTS device_telemetry (
  id BIGSERIAL PRIMARY KEY,
  device_uuid VARCHAR(64) NOT NULL,
  metric_name VARCHAR(64) NOT NULL,
  reading_value NUMERIC(10, 4) NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_device FOREIGN KEY (device_uuid) 
    REFERENCES devices (uuid) ON DELETE CASCADE
);

CREATE INDEX idx_telemetry_device_time 
  ON device_telemetry (device_uuid, recorded_at DESC);`,
  },
};

type TabKey = 'frontend' | 'backend' | 'database';

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('frontend');
  const [copied, setCopied] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<string | null>(null);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setSimulating(true);
    setSimResult(null);
    setTimeout(() => {
      setSimulating(false);
      setSimResult(
        activeTab === 'frontend'
          ? '✓ Rendered in 12ms (Zero re-renders)'
          : activeTab === 'backend'
          ? '✓ 200 OK — Response time: 24ms [Cached]'
          : '✓ Query executed — Index scan on idx_telemetry_device_time (1.4ms)'
      );
    }, 700);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients for subtle tech atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-sky-600/15 via-cyan-600/10 to-blue-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Brand & Elevator Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Developer Identity & Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-2xl glass-card border border-white/[0.12] shadow-xl shadow-cyan-950/30 backdrop-blur-md group hover:border-cyan-400/40 transition-all">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/20 bg-slate-900/90 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={personalInfo.photo || personalInfo.logo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400">
                      Available for projects
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-white tracking-tight">
                    {personalInfo.name} · {personalInfo.role}
                  </span>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] text-slate-300 text-xs font-medium backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>React · Node.js · TypeScript</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]">
              Building scalable web experiences with{' '}
              <span className="text-transparent bg-clip-text text-theme-gradient">
                clean, thoughtful code.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {personalInfo.description}
            </p>

            {/* Location & Experience Note */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/40 border border-white/[0.06] backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/40 border border-white/[0.06] backdrop-blur-sm">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.experienceYears} Industry Experience</span>
                <span className="text-[10px] text-slate-400 font-normal">
                  ({personalInfo.experienceNote})
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-theme-gradient text-white font-medium text-sm transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white border border-white/[0.1] hover:border-cyan-400/40 backdrop-blur-md font-medium text-sm transition-all duration-200 active:scale-98 cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/70 text-slate-300 hover:text-white border border-white/[0.08] hover:border-blue-400/40 backdrop-blur-md font-medium text-sm transition-all duration-200 cursor-pointer shadow-sm"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Compact Tech Stack Bar */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Engineering Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.heroTechStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/[0.08] text-slate-300 text-xs font-medium hover:border-cyan-400/50 hover:text-white hover:bg-white/[0.05] transition-all shadow-sm"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        tech.category === 'frontend'
                          ? 'bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]'
                          : tech.category === 'backend'
                          ? 'bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]'
                          : 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]'
                      }`}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code-Inspired Interactive Architecture Visual */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 border border-white/[0.12] shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden glass-card">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                  <span className="text-xs font-mono text-slate-300 ml-2">
                    {codeSnippets[activeTab].filename}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                    title="Copy snippet"
                    aria-label="Copy code snippet"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleSimulate}
                    disabled={simulating}
                    className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 hover:bg-cyan-900/80 transition-colors shadow-sm cursor-pointer"
                    title="Simulate execution"
                  >
                    <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                    <span>{simulating ? 'Running...' : 'Run'}</span>
                  </button>
                </div>
              </div>

              {/* Sub-Tabs: Frontend / Backend / Database */}
              <div className="flex border-b border-white/[0.08] bg-slate-950/40 px-2 pt-1 gap-1">
                <button
                  onClick={() => setActiveTab('frontend')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeTab === 'frontend'
                      ? 'bg-slate-900/90 text-sky-300 border-t-2 border-sky-400 font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Frontend</span>
                </button>
                <button
                  onClick={() => setActiveTab('backend')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeTab === 'backend'
                      ? 'bg-slate-900/90 text-cyan-300 border-t-2 border-cyan-400 font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Backend API</span>
                </button>
                <button
                  onClick={() => setActiveTab('database')}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer ${
                    activeTab === 'database'
                      ? 'bg-slate-900/90 text-blue-300 border-t-2 border-blue-400 font-semibold shadow-inner'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Database className="w-3.5 h-3.5 text-blue-400" />
                  <span>Database</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 overflow-x-auto max-h-[310px] min-h-[290px] font-mono text-xs leading-relaxed text-slate-300 select-text">
                <pre className="whitespace-pre">
                  <code>{codeSnippets[activeTab].code}</code>
                </pre>
              </div>

              {/* Simulated Output Status Bar */}
              <div className="px-4 py-2.5 bg-[#080c16] border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span className="truncate">
                    {simResult || `Ready: ${codeSnippets[activeTab].badge}`}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider shrink-0 ml-2">
                  TypeScript 5.x
                </span>
              </div>
            </div>

            {/* Subtle Architecture Footnote */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono px-1">
              <span>Full Stack Pipeline</span>
              <span>RESTful · Strongly Typed · Relational</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
