import { Component } from '@angular/core';
import { RequestResumeModalComponent } from './request-resume-modal.component';
import { HttpClient } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navbarOpen = false;
  showResumeModal = false;
  resumeRequestData: any = null;
  snackbarMessage: string | null = null;
  snackbarSuccess: boolean = false;

  constructor(private http: HttpClient) { }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  openResumeModal() {
    this.showResumeModal = true;
    this.snackbarMessage = null;
  }

  onResumeModalConfirm(data: any) {
    this.showResumeModal = false;
    this.resumeRequestData = data;
    this.snackbarMessage = null;
    this.http.post<any>('http://localhost:8080/api/contact/send', {
      name: data.company,
      email: data.email,
      message: `Resume Request: ${data.reason}`
    }).subscribe({
      next: (response) => {
        this.snackbarMessage = response.message || 'Resume request sent successfully!';
        this.snackbarSuccess = true;
        this.clearSnackbarAfterDelay();
      },
      error: (err) => {
        this.snackbarMessage = 'Failed to send resume request.';
        this.snackbarSuccess = false;
        this.clearSnackbarAfterDelay();
      }
    });
  }

  onResumeModalCancel() {
    this.showResumeModal = false;
    this.snackbarMessage = null;
  }

  clearSnackbarAfterDelay() {
    setTimeout(() => {
      this.snackbarMessage = null;
    }, 3500);
  }
}
