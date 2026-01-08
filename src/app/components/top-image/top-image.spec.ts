import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopImage } from './top-image';

describe('TopImage', () => {
  let component: TopImage;
  let fixture: ComponentFixture<TopImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
