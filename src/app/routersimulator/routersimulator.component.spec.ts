import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutersimulatorComponent } from './routersimulator.component';

describe('RoutersimulatorComponent', () => {
  let component: RoutersimulatorComponent;
  let fixture: ComponentFixture<RoutersimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutersimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutersimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
