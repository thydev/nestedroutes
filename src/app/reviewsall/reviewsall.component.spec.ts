import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsallComponent } from './reviewsall.component';

describe('ReviewsallComponent', () => {
  let component: ReviewsallComponent;
  let fixture: ComponentFixture<ReviewsallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
