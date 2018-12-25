/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AlertModule, TabsModule} from 'ng2-bootstrap';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {MockAuthService} from '../../test/MockAuthService';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TabsModule.forRoot(),
        AlertModule.forRoot()
      ],
      declarations: [LoginComponent],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
