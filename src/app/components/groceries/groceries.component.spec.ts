import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GroceriesComponent } from './groceries.component';
import { RouterModule } from '@angular/router';

describe('GroceriesComponent', () => {
  let component: GroceriesComponent;
  let fixture: ComponentFixture<GroceriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GroceriesComponent, RouterModule.forRoot([])]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
