import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-request-resume-modal',
    templateUrl: './request-resume-modal.component.html',
    styleUrls: ['./request-resume-modal.component.css']
})
export class RequestResumeModalComponent {
    @Input() visible = false;
    @Output() confirm = new EventEmitter<{ company: string, reason: string, email: string }>();
    @Output() cancel = new EventEmitter<void>();

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            company: ['', Validators.required],
            reason: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onConfirm() {
        if (this.form.valid) {
            this.confirm.emit(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }

    onCancel() {
        this.cancel.emit();
    }
} 