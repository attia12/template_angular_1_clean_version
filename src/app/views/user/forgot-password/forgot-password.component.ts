import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('passwordForm') passwordForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  constructor( private notifications: NotificationsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.passwordForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';

   
  }

}
