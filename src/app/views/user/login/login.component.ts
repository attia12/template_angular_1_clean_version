import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = 'demo@vien.com';
  passwordModel = 'demovien1122';

  buttonDisabled = false;
  buttonState = '';

  constructor( private notifications: NotificationsService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid || this.buttonDisabled) {
      return;
    }
    this.buttonDisabled = true;
    this.buttonState = 'show-spinner';
  
  }
}
