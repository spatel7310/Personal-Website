import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  responseMessage: string | null = null;
  errorMessages: string[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    const { name, email, message } = this.form.value;
    this.responseMessage = null;
    this.errorMessages = [];
    this.http.post<any>('http://localhost:8080/api/contact/send', { name, email, message })
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
  }
}