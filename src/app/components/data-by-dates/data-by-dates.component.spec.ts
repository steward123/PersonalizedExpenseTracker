import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataByDatesComponent } from './data-by-dates.component';

describe('DataByDatesComponent', () => {
  let component: DataByDatesComponent;
  let fixture: ComponentFixture<DataByDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataByDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataByDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
