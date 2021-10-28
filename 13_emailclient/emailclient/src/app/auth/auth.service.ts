import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignUpCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignUpResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string) {
    return this.http.post<UsernameAvailableResponse>(`${this.rootUrl}/auth/username`, {
      username // when key and value are identical, you can just display the key
    });
  }

  signup(credentials: SignUpCredentials) {
    return this.http.post<SignUpResponse>(
      `${this.rootUrl}/auth/signup`, 
      credentials
    );
  }
}
