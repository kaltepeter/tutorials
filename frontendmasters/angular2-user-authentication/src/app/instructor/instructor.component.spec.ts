/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, Injectable} from '@angular/core';

import { InstructorComponent } from './instructor.component';
import {InstructorService} from './instructor.service';
import {MockAuthService} from '../../test/MockAuthService';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';
import {MockInstructorService} from '../../test/MockInstructorService';

describe('InstructorComponent', () => {
  let component: InstructorComponent;
  let fixture: ComponentFixture<InstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorComponent ],
      providers: [
        {provide: InstructorService, useClass: MockInstructorService},
        {provide: AuthService, useClass: MockAuthService},
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
