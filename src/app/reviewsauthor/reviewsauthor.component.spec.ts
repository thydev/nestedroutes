import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsauthorComponent } from './reviewsauthor.component';

describe('ReviewsauthorComponent', () => {
  let component: ReviewsauthorComponent;
  let fixture: ComponentFixture<ReviewsauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
