/* tslint:disable:no-unused-variable */

import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AuthService} from './auth/auth.service';
import {MockAuthService} from '../test/MockAuthService';
import {RouterTestingModule} from '@angular/router/testing';

describe('App: FemAuthAngular2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
