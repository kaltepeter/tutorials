/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http,
        AuthService
      ]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
