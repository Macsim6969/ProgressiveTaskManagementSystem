import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparusGame } from './comparus-game';

describe('ComparusGame', () => {
  let component: ComparusGame;
  let fixture: ComponentFixture<ComparusGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparusGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparusGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
