import { ApplicationRef, Injectable, inject } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { concat, filter, first, interval } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class SwUpdateService {
  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    // Allow the app to stabilize first, before starting
    // polling for updates with `interval()`.
    const appIsStable$ = appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everyFiveMinutes$ = interval(5 * 60 * 1000);
    const everyFiveMinutesOnceAppIsStable$ = concat(
      everyFiveMinutes$,
      appIsStable$
    );

    everyFiveMinutesOnceAppIsStable$.subscribe(async () => {
      try {
        const updateFound = await updates.checkForUpdate();
        console.log(
          updateFound
            ? 'A new version is available.'
            : 'Already on the latest version.'
        );
      } catch (err) {
        console.error('Failed to check for updates:', err);
      }
    });

    // Optional: subscribe to available updates
    // TODO: add a toast to show the update
    updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(async (evt) => {
        try {
          await updates.activateUpdate();
          inject(NotificationService).presentAlert();
        } catch (error) {
          console.error('Failed to update:', error);
        }
      });

    // Optional: subscribe to unrecoverable errors
    // TODO: add a toast to show the error
    updates.unrecoverable.subscribe((event) => {
      console.error(
        `An error occurred that we cannot recover from:\n${event.reason}\n\n` +
          'Please reload the page.'
      );
    });
  }
}
