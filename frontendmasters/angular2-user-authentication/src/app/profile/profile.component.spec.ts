/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {AuthService} from '../auth/auth.service';
import {MockAuthService} from '../../test/MockAuthService';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
