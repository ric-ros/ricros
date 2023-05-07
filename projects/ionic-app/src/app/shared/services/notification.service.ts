import { Injectable, inject } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  alertController = inject(AlertController);

  alertButtons = [
    {
      text: 'Next Time',
      role: 'cancel',
    },
    {
      text: 'Reload',
      role: 'confirm',
    },
  ];

  constructor() {}

  async presentAlert(alertOpts: AlertOptions = {}) {
    const alert = await this.alertController.create(
      Object.assign(alertOpts, { buttons: this.alertButtons })
    );

    await alert.present();
  }
}
