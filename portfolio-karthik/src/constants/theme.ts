import type { ThemeOption, BgModeOption } from '../types/theme';

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cyan',
    name: 'Electric Cyan',
    accentColor: '#00d4ff',
    secondaryColor: '#2563eb',
    description: 'Signature electric cyan & azure blue matching your 3D logo',
  },
  {
    id: 'indigo',
    name: 'Cyber Indigo',
    accentColor: '#6366f1',
    secondaryColor: '#38bdf8',
    description: 'Modern high-tech developer aesthetic',
  },
  {
    id: 'emerald',
    name: 'Matrix Emerald',
    accentColor: '#10b981',
    secondaryColor: '#06b6d4',
    description: 'Crisp hacker & terminal energy',
  },
  {
    id: 'purple',
    name: 'Cosmic Violet',
    accentColor: '#a855f7',
    secondaryColor: '#ec4899',
    description: 'Vibrant synthwave & creative neon',
  },
  {
    id: 'rose',
    name: 'Cyberpunk Rose',
    accentColor: '#f43f5e',
    secondaryColor: '#fb923c',
    description: 'High-contrast bold crimson aura',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    accentColor: '#f59e0b',
    secondaryColor: '#ea580c',
    description: 'Warm gold & prestigious contrast',
  },
];

export const BG_MODE_OPTIONS: BgModeOption[] = [
  {
    id: 'midnight',
    name: 'Cyber Midnight',
    bgHex: '#080c14',
    description: 'Deep cosmic slate with balanced contrast',
  },
  {
    id: 'obsidian',
    name: 'Pure Obsidian',
    bgHex: '#030712',
    description: 'Ultra-deep OLED black for vivid pop',
  },
  {
    id: 'navy',
    name: 'Deep Space Navy',
    bgHex: '#090e1e',
    description: 'Rich blue-tinted dark atmosphere',
  },
];

export const THEME_STORAGE_KEY = 'karthik_portfolio_theme';
export const BG_MODE_STORAGE_KEY = 'karthik_portfolio_bg_mode';

