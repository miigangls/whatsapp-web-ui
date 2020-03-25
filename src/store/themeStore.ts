import { create } from 'zustand';
import { ThemeStore, Theme } from '@/types';

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('wa-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () =>
    set((state) => {
      const next: Theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('wa-theme', next);
      document.documentElement.setAttribute('data-theme', next);
      return { theme: next };
    }),
}));
