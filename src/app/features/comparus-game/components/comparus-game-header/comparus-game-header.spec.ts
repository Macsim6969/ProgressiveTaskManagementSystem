import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparusGameHeader } from './comparus-game-header';

describe('ComparusGameHeader', () => {
  let component: ComparusGameHeader;
  let fixture: ComponentFixture<ComparusGameHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparusGameHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparusGameHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
