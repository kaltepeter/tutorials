import {Component, ViewChild} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;

  @ViewChild('loginForm') loginForm: HTMLFormElement;

  constructor(private auth: AuthService) {
  }

  onLoginSubmit(credentials) {
    this.auth.login(credentials)
      .subscribe(
        (token) => {
          this.auth.finishAuthentication(token);
        },
        err => this.handleErrors(err)
      );
  }

  onSignupSubmit(credentials) {
    this.auth.signup(credentials)
      .subscribe(
        (token) => {
          this.auth.finishAuthentication(token);
        },
        err => this.handleErrors(err)
      );
  }

  handleErrors(err) {
    this.errorMessage = err.message;
  }

}
