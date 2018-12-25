/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './authguard.service';
import {AuthService} from './auth.service';
import {MockAuthService} from '../../test/MockAuthService';
import {RouterTestingModule} from '@angular/router/testing';

describe('Service: Authguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, {provide: AuthService, useClass: MockAuthService}]
    });
  });

  it('should ...', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
