import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AlertModule, TabsModule} from 'ng2-bootstrap';

import {AuthConfig, AuthHttp} from 'angular2-jwt';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {InstructorComponent} from './instructor/instructor.component';
import {NewInstructorComponent} from './new-instructor/new-instructor.component';

import {AuthService} from './auth/auth.service';
import {InstructorService} from './instructor/instructor.service';
import {AuthGuard} from './auth/authguard.service';
import {RoleGuard} from './auth/roleguard.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InstructorComponent,
    ProfileComponent,
    NewInstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    TabsModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    RoleGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    InstructorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
