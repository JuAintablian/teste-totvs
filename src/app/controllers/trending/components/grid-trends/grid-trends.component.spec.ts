import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrendsComponent } from './grid-trends.component';

describe('GridTrendsComponent', () => {
  let component: GridTrendsComponent;
  let fixture: ComponentFixture<GridTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
