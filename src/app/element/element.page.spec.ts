import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementPage } from './element.page';

describe('ElementPage', () => {
  let component: ElementPage;
  let fixture: ComponentFixture<ElementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
