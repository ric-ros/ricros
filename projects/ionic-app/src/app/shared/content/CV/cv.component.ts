import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  constructor() {}

  calculateTillNow(date: string): string {
    // Calculate the number of months between the specific date and the current date
    const monthsDiff =
      (new Date().getTime() - new Date(date).getTime()) /
      1000 /
      60 /
      60 /
      24 /
      30.44;

    // Format the result as a string
    let result;
    if (monthsDiff < 12) {
      result = `${Math.floor(monthsDiff)} month${
        Math.floor(monthsDiff) === 1 ? '' : 's'
      }`;
    } else {
      const years = Math.floor(monthsDiff / 12);
      const months = Math.floor(monthsDiff % 12);
      result = `${years} year${years === 1 ? '' : 's'} and ${months} month${
        months === 1 ? '' : 's'
      }`;
    }

    return result;
  }
}
