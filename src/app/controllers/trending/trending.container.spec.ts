import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingContainerComponent } from './trending.container';

describe('Trending.ContainerComponent', () => {
  let component: TrendingContainerComponent;
  let fixture: ComponentFixture<TrendingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
