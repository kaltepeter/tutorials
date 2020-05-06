import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildShellComponent } from './child-shell.component';

describe('ChildShellComponent', () => {
  let component: ChildShellComponent;
  let fixture: ComponentFixture<ChildShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
