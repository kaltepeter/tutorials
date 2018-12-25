/* tslint:disable:no-unused-variable */

import {inject, TestBed} from '@angular/core/testing';
import {InstructorService} from './instructor.service';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {authHttpServiceFactory} from '../app.module';

describe('Service: Instructor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
        Http,
        InstructorService,
        {
          provide: AuthHttp,
          useFactory: authHttpServiceFactory,
          deps: [Http, RequestOptions]
        },
      ]
    });
  });

  it('should ...', inject([InstructorService], (service: InstructorService) => {
    expect(service).toBeTruthy();
  }));
});
