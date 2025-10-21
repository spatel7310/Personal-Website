import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {
  private messageTypeSubject = new BehaviorSubject<string>('');
  public messageType$ = this.messageTypeSubject.asObservable();

  setMessageType(messageType: string): void {
    this.messageTypeSubject.next(messageType);
  }

  getMessageType(): string {
    return this.messageTypeSubject.value;
  }
}
