import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparusGameBoard } from './comparus-game-board';

describe('ComparusGameBoard', () => {
  let component: ComparusGameBoard;
  let fixture: ComponentFixture<ComparusGameBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparusGameBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparusGameBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
