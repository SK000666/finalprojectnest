import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foodrecipe } from './foodrecipe';

describe('Foodrecipe', () => {
  let component: Foodrecipe;
  let fixture: ComponentFixture<Foodrecipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodrecipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foodrecipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
