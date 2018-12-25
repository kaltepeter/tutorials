import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { API_URL } from './../app.constants';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  login(credentials): Observable<string> {
    return this.http.post(`${API_URL}/users/authenticate`, credentials)
      .map(res => res.json().token)
      .catch(err => Observable.throw(err.json()));
  }

  signup(credentials): Observable<string> {
    return this.http.post(`${API_URL}/users`, credentials)
      .map(res => res.json().token)
      .catch(err => Observable.throw(err.json()));
  }

  finishAuthentication(token): void {
    localStorage.setItem('token', token)
    this.router.navigate(['profile']);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return tokenNotExpired('token');
  }

  isAdmin(): boolean {
    return jwtDecode(this.getToken()).scope === 'admin';
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUseRole(): string {
    return jwtDecode(this.getToken()).scope;
  }

}
