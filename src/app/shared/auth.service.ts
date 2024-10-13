import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import { getUserRole } from 'src/app/utils/util';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  signIn(credentials: ISignInCredentials) {
   
  }

  signOut() {
    
  }

  register(credentials: ICreateCredentials) {
  
  }

  sendPasswordEmail(email) {
  
  }

  resetPassword(credentials: IPasswordReset) {
   
  }

  async getUser() {
   
  }
}
