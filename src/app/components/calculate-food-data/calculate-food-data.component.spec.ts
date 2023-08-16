import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFoodDataComponent } from './calculate-food-data.component';

describe('CalculateFoodDataComponent', () => {
  let component: CalculateFoodDataComponent;
  let fixture: ComponentFixture<CalculateFoodDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateFoodDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateFoodDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
