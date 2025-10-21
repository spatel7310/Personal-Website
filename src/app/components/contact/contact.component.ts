import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ContactMessageService } from '../../services/contact-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  responseMessage: string | null = null;
  errorMessages: string[] = [];
  private messageTypeSubscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    private contactMessageService: ContactMessageService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    
    // Subscribe to message type changes
    this.messageTypeSubscription = this.contactMessageService.messageType$.subscribe(messageType => {
      if (messageType && this.form) {
        this.setPredefinedMessage(messageType);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.messageTypeSubscription) {
      this.messageTypeSubscription.unsubscribe();
    }
  }

  send(): void {
    const { name, email, message } = this.form.value;
    this.responseMessage = null;
    this.errorMessages = [];
    
    this.http.post<any>(`${environment.apiUrl}/contact/send`, { name, email, message })
      .subscribe({
        next: (response) => {
          this.responseMessage = response.message || 'Message sent successfully!';
          this.form.reset();
        },
        error: (err) => {
          if (err.error) {
            if (typeof err.error.message === 'string' && !err.error.status) {
              // Validation error with message
              this.errorMessages.push(err.error.message);
            } else if (typeof err.error === 'object') {
              // Multiple validation errors
              this.errorMessages = Object.values(err.error).map(v => String(v));
            } else {
              this.errorMessages.push('Failed to send message. Please try again.');
            }
          } else {
            this.errorMessages.push('Failed to send message. Please try again.');
          }
        }
      });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });
    
    // Set predefined message if messageType is available
    const currentMessageType = this.contactMessageService.getMessageType();
    if (currentMessageType) {
      this.setPredefinedMessage(currentMessageType);
    }
  }

  private setPredefinedMessage(messageType: string): void {
    if (!this.form) return;
    
    let predefinedMessage = '';
    
    switch (messageType) {
      case 'resume':
        predefinedMessage = 'Requesting resume to the email provided.';
        break;
      case 'hire':
        predefinedMessage = 'Looking to Hire? \n\nDescription:';
        break;
      default:
        predefinedMessage = '';
    }
    
    if (predefinedMessage) {
      this.form.patchValue({ message: predefinedMessage });
    }
  }
}