import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrecComponent } from './displayrec.component';

describe('DisplayrecComponent', () => {
  let component: DisplayrecComponent;
  let fixture: ComponentFixture<DisplayrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
