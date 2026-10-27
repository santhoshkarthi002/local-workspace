import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Check, Sparkles, Moon, RotateCcw } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { THEME_OPTIONS, BG_MODE_OPTIONS } from '../constants/theme';
import type { ThemeId, BackgroundMode } from '../types/theme';

export const ThemeCustomizerModal: React.FC = () => {
  const {
    theme,
    setTheme,
    bgMode,
    setBgMode,
    isAppearanceOpen,
    setIsAppearanceOpen,
    currentThemeMeta,
  } = useTheme();

  if (!isAppearanceOpen) return null;

  const handleReset = () => {
    setTheme('cyan');
    setBgMode('midnight');
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
        onClick={() => setIsAppearanceOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appearance-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg glass-card rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-200 border border-white/[0.12]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-slate-950/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-md transition-colors"
                style={{
                  background: `linear-gradient(135deg, ${currentThemeMeta.accentColor}, ${currentThemeMeta.secondaryColor})`,
                }}
              >
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h3
                  id="appearance-modal-title"
                  className="text-base sm:text-lg font-bold text-white tracking-tight"
                >
                  Appearance Settings
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  Custom color palettes &amp; cosmic atmosphere
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsAppearanceOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Color Palette Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: currentThemeMeta.accentColor }} />
                  <span>Accent Color Theme</span>
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Active: <strong className="text-white">{currentThemeMeta.name}</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {THEME_OPTIONS.map((opt) => {
                  const isSelected = theme === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setTheme(opt.id as ThemeId)}
                      type="button"
                      className={`relative p-3 rounded-2xl flex flex-col items-start gap-2.5 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.09] border-2 shadow-lg'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08]'
                      }`}
                      style={{
                        borderColor: isSelected ? opt.accentColor : undefined,
                        boxShadow: isSelected
                          ? `0 10px 25px -5px ${opt.accentColor}50`
                          : undefined,
                      }}
                    >
                      {/* Swatch Circle */}
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${opt.accentColor}, ${opt.secondaryColor})`,
                          }}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        </div>
                        {isSelected && (
                          <span
                            className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${opt.accentColor}25`,
                              color: opt.accentColor,
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="text-xs font-semibold text-white leading-snug">
                          {opt.name}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
                          {opt.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Atmosphere Background Mode */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-slate-400" />
                <span>Cosmic Canvas Mode</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {BG_MODE_OPTIONS.map((mode) => {
                  const isSelected = bgMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setBgMode(mode.id as BackgroundMode)}
                      type="button"
                      className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white/[0.09] border-2 shadow-md'
                          : 'bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08]'
                      }`}
                      style={{
                        borderColor: isSelected ? currentThemeMeta.accentColor : undefined,
                      }}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: mode.bgHex }}
                      />
                      <div className="text-left">
                        <div className="text-xs font-semibold text-white leading-tight">
                          {mode.name}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          {mode.bgHex}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Preview Box */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                Live Theme Preview
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="btn-theme-gradient px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-md cursor-pointer"
                >
                  Gradient Button
                </button>
                <span className="theme-badge px-3 py-1.5 rounded-lg text-xs font-mono font-medium">
                  Status: Theme Active
                </span>
                <span className="text-theme-gradient font-bold text-sm">
                  Luminous Typography
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-slate-950/40">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <button
              onClick={() => setIsAppearanceOpen(false)}
              className="btn-theme-gradient px-5 py-2 rounded-xl text-xs font-semibold text-white cursor-pointer"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
