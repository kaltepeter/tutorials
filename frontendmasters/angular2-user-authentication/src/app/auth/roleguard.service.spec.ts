/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {RoleGuard} from './roleguard.service';
import {AuthService} from './auth.service';
import {MockAuthService} from '../../test/MockAuthService';
import {RouterTestingModule} from '@angular/router/testing';

describe('Service: Roleguard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RoleGuard, {provide: AuthService, useClass: MockAuthService}]
    });
  });

  it('should ...', inject([RoleGuard], (service: RoleGuard) => {
    expect(service).toBeTruthy();
  }));
});
