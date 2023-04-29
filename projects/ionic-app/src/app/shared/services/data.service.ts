import { Injectable } from '@angular/core';
import { Message } from '../types/message';
import {
  MessageExperienceContentEnum,
  MessageExperienceFormattedContentEnum,
  inboxMessages,
} from '../content/email/message/messages/inbox-message-content';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  delay,
  map,
  of,
  shareReplay,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _inbox = new ReplaySubject<Message[]>();

  constructor() {
    this._inbox.subscribe((messages) => this.saveInLocalStorage(messages));

    // simulate network latency
    timer(1000)
      .pipe(take(1))
      .subscribe(() => {
        this._inbox.next(this._fetchInboxMessages());
      });
  }

  private _fetchInboxMessages(): Message[] {
    let messages = this.loadMessages();

    if (!messages) {
      messages = inboxMessages;
    }

    return messages;
  }

  public get inboxMessages$() {
    return this._inbox.asObservable();
  }

  public get favoriteMessages$(): Observable<Message[]> {
    return this.inboxMessages$.pipe(
      map((messages) => messages.filter((message) => message.important)),
    );
  }

  public getMessageById$(messageId: number) {
    return this.inboxMessages$.pipe(
      map((messages) => messages.find((message) => message.id === messageId))
    );
  }

  public deleteMessage(messageId: number): void {
    this._inbox.next(
      this._fetchInboxMessages().filter((message) => message.id !== messageId)
    );
  }

  public toggleRead(messageId: number, read?: boolean): void {
    this._inbox.next(
      this._fetchInboxMessages().map((message) => {
        if (message.id === messageId) {
          message.read = read ?? !message.read;
        }

        return message;
      })
    );
  }

  public toggleImportant(messageId: number): void {
    this._inbox.next(
      this._fetchInboxMessages().map((message) => {
        if (message.id === messageId) {
          message.important = !message.important;
        }

        return message;
      })
    );
  }

  public getUnreadCount(): number {
    return this._fetchInboxMessages().filter((message) => !message.read).length;
  }

  private saveInLocalStorage(messages: Message[]): void {
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  private loadMessages(): Message[] | null {
    const messages = localStorage.getItem('messages');

    if (messages) {
      return JSON.parse(messages) as Message[];
    }

    return null;
  }

  private clearLocalStorage(): void {
    localStorage.removeItem('messages');
  }

  public reset(): void {
    this.clearLocalStorage();
  }
}
