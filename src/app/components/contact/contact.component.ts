import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isMailSending: boolean = false;
  uploadMessage: string = '';
  isError: boolean = false;
  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

 onSubmit() {
  if (this.contactForm.invalid) return;

  this.isMailSending = true;

  const formData = {
    name: this.contactForm.value.name,
    email: this.contactForm.value.email,
    message: this.contactForm.value.message,
  };

  emailjs.send(
    'service_dwgr10b',
    'template_806gys7',
    formData,
    'VYqQTgRjjnXunNbdZ'
  ).then(
    () => {
      this.uploadMessage = "Message sent successfully ✅";
      this.isError = false;
      this.contactForm.reset();
      this.isMailSending = false;
    },
    (error) => {
      console.error(error);
      this.uploadMessage = "Failed to send message ❌";
      this.isError = true;
      this.isMailSending = false;
    }
  );
}
        }
