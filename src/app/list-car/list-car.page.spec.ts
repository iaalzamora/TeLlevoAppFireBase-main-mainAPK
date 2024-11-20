import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCarPage } from './list-car.page';

describe('ListCarPage', () => {
  let component: ListCarPage;
  let fixture: ComponentFixture<ListCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
