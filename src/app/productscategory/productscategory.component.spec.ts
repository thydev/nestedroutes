import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscategoryComponent } from './productscategory.component';

describe('ProductscategoryComponent', () => {
  let component: ProductscategoryComponent;
  let fixture: ComponentFixture<ProductscategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductscategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
