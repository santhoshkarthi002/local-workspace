import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggleFloat: React.FC = () => {
  const { toggleAppearance, currentThemeMeta } = useTheme();

  return (
    <button
      onClick={toggleAppearance}
      type="button"
      className="fixed bottom-20 right-6 z-40 p-3 rounded-2xl bg-slate-900/75 hover:bg-slate-850 border border-white/[0.12] hover:border-white/30 shadow-2xl backdrop-blur-xl transition-all cursor-pointer group hover:scale-105 flex items-center justify-center"
      title={`Customize Theme (Current: ${currentThemeMeta.name})`}
      aria-label="Theme Customizer Settings"
    >
      <span
        className="w-2.5 h-2.5 rounded-full absolute -top-1 -right-1 shadow-md border border-white/30 animate-pulse"
        style={{ backgroundColor: currentThemeMeta.accentColor }}
      />
      <Palette className="w-4 h-4 text-slate-300 group-hover:rotate-45 transition-transform" />
    </button>
  );
};
