export type ThemeId = 'indigo' | 'cyan' | 'purple' | 'emerald' | 'rose' | 'amber';
export type BackgroundMode = 'midnight' | 'obsidian' | 'navy';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  accentColor: string;
  secondaryColor: string;
  description: string;
}

export interface BgModeOption {
  id: BackgroundMode;
  name: string;
  bgHex: string;
  description: string;
}

export interface ThemeContextType {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
  bgMode: BackgroundMode;
  setBgMode: (mode: BackgroundMode) => void;
  isAppearanceOpen: boolean;
  setIsAppearanceOpen: (open: boolean) => void;
  toggleAppearance: () => void;
  currentThemeMeta: ThemeOption;
}

