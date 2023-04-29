import { Injectable, inject } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  platform = inject(Platform);
  constructor() {}

  isIos() {
    return this.platform.is('ios');
  }
}
