/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewInstructorComponent } from './new-instructor.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {InstructorService} from '../instructor/instructor.service';
import {MockInstructorService} from '../../test/MockInstructorService';

describe('NewInstructorComponent', () => {
  let component: NewInstructorComponent;
  let fixture: ComponentFixture<NewInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ NewInstructorComponent ],
      providers: [{provide: InstructorService, useClass: MockInstructorService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
