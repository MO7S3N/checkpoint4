import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecvComponent } from './deletecv.component';

describe('DeletecvComponent', () => {
  let component: DeletecvComponent;
  let fixture: ComponentFixture<DeletecvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
