import { Injectable, inject } from '@angular/core';
import { DARK_MODE } from '../utils/injection-tokens';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode = inject(DARK_MODE);
  private _darkMode$ = new BehaviorSubject<boolean>(this._darkMode);

  constructor() {
    // Listen for changes to the prefers-color-scheme media query
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        document.body.classList.toggle('dark', e.matches);
        sessionStorage.setItem('theme', e.matches ? 'dark' : 'light');
      });
  }

  get isDarkMode$() {
    return this._darkMode$;
  }

  toggleDarkMode() {
    this._darkMode$.next(!this._darkMode$.value);

    sessionStorage.setItem('theme', this._darkMode$.value ? 'dark' : 'light');
    this.setTheme();
  }

  setTheme() {
    document.body.classList.toggle('dark', this._darkMode$.value);
  }
}
