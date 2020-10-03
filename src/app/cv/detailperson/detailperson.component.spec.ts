import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpersonComponent } from './detailperson.component';

describe('DetailpersonComponent', () => {
  let component: DetailpersonComponent;
  let fixture: ComponentFixture<DetailpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
