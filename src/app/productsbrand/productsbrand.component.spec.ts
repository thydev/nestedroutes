import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsbrandComponent } from './productsbrand.component';

describe('ProductsbrandComponent', () => {
  let component: ProductsbrandComponent;
  let fixture: ComponentFixture<ProductsbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
