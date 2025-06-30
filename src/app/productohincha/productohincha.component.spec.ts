import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductohinchaComponent } from './productohincha.component';

describe('ProductohinchaComponent', () => {
  let component: ProductohinchaComponent;
  let fixture: ComponentFixture<ProductohinchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductohinchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductohinchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
