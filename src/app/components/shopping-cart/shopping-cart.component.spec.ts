import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShoppingCart } from './shopping-cart.component';
import { RouterModule } from '@angular/router';

describe('ShoppingCart', () => {
  let component: ShoppingCart;
  let fixture: ComponentFixture<ShoppingCart>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShoppingCart, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
