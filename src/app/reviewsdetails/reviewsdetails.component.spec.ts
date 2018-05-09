import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsdetailsComponent } from './reviewsdetails.component';

describe('ReviewsdetailsComponent', () => {
  let component: ReviewsdetailsComponent;
  let fixture: ComponentFixture<ReviewsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
