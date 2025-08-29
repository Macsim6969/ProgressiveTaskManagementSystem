import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoard } from './game-board';
import { AsyncPipe, CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { GameFiledBlock } from '../../models/game-filed-block.type';
import 'zone.js';

describe('ComparusGameBoard', () => {
  let component: GameBoard;
  let fixture: ComponentFixture<GameBoard>;

  const mockField: GameFiledBlock = [
    { row: 0, col: 0, color: 'active' },
    { row: 0, col: 1, color: 'hit' },
    { row: 0, col: 2, color: 'miss' },
    { row: 1, col: 0, color: 'idle' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, GameBoard],
      providers: [AsyncPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoard);
    component = fixture.componentInstance;

    component.field$ = of(mockField);
    component.isRunning$ = of(true);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct number of cells', () => {
    const cells = fixture.debugElement.queryAll(By.css('.cell'));
    expect(cells.length).toBe(mockField.length);
  });

  it('should emit clickedCell when clicking active cell', () => {
    spyOn(component.clickedCell, 'emit');

    const activeCell = fixture.debugElement.queryAll(By.css('.cell'))
      .find(cell => cell.attributes['data-state'] === 'active')!.nativeElement;

    activeCell.click();
    expect(component.clickedCell.emit).toHaveBeenCalledWith({ row: 0, col: 0 });
  });

  it('should disable cells based on color', () => {
    const cells = fixture.debugElement.queryAll(By.css('.cell'));

    const getDisabled = (el: any) => el.nativeElement.disabled;

    expect(getDisabled(cells[0])).toBeFalse(); // active
    expect(getDisabled(cells[1])).toBeTrue();  // hit
    expect(getDisabled(cells[2])).toBeTrue();  // miss
    expect(getDisabled(cells[3])).toBeTrue();  // idle
  });

  it('should disable all cells if isRunning is false', () => {
    component.isRunning$ = of(false);
    fixture.detectChanges();

    const cells = fixture.debugElement.queryAll(By.css('.cell'));
    cells.forEach(cell => {
      expect(cell.nativeElement.disabled).toBeTrue();
    });
  });
});
