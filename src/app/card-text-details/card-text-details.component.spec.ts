import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTextDetailsComponent } from './card-text-details.component';

describe('CardTextDetailsComponent', () => {
  let component: CardTextDetailsComponent;
  let fixture: ComponentFixture<CardTextDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTextDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTextDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
