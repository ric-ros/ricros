import { InjectionToken } from '@angular/core';

const isDarkMode = () => {
  const _storedTheme = sessionStorage.getItem('theme');
  const _darkOrLightMode: 'dark' | 'light' =
    sessionStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

  return _storedTheme
    ? _darkOrLightMode === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const DARK_MODE = new InjectionToken<boolean>('DARK_MODE');
export const DARK_MODE_DEFAULT = isDarkMode();
