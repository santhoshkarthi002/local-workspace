import React, { useState, useEffect, type ReactNode } from 'react';
import type { ThemeId, BackgroundMode } from '../types/theme';
import {
  THEME_OPTIONS,
  BG_MODE_OPTIONS,
  THEME_STORAGE_KEY,
  BG_MODE_STORAGE_KEY,
} from '../constants/theme';
import { ThemeContext } from './ThemeContextDefinition';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeId;
      if (stored && THEME_OPTIONS.some((t) => t.id === stored)) {
        return stored;
      }
    }
    return 'cyan';
  });

  const [bgMode, setBgModeState] = useState<BackgroundMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(BG_MODE_STORAGE_KEY) as BackgroundMode;
      if (stored && BG_MODE_OPTIONS.some((b) => b.id === stored)) {
        return stored;
      }
    }
    return 'midnight';
  });

  const [isAppearanceOpen, setIsAppearanceOpen] = useState(false);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  const setBgMode = (newMode: BackgroundMode) => {
    setBgModeState(newMode);
    localStorage.setItem(BG_MODE_STORAGE_KEY, newMode);
  };

  const toggleAppearance = () => {
    setIsAppearanceOpen((prev) => !prev);
  };

  // Sync DOM attributes with theme & background mode
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-mode', bgMode);
  }, [theme, bgMode]);

  const currentThemeMeta =
    THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        bgMode,
        setBgMode,
        isAppearanceOpen,
        setIsAppearanceOpen,
        toggleAppearance,
        currentThemeMeta,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
