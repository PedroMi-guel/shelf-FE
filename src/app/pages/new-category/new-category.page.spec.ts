import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCategoryPage } from './new-category.page';

describe('NewCategoryPage', () => {
  let component: NewCategoryPage;
  let fixture: ComponentFixture<NewCategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
