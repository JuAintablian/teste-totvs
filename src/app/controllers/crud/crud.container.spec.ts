import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContainerComponent } from './crud.container';

describe('CrudContainerComponent', () => {
  let component: CrudContainerComponent;
  let fixture: ComponentFixture<CrudContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
