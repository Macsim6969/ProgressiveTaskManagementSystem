import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoard } from './game-board';
import { By } from '@angular/platform-browser';
import 'zone.js';
import {GameFiledBlock} from '../../models/game-filed-block.type';

describe('GameBoard', () => {
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
      imports: [GameBoard]
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoard);
    component = fixture.componentInstance;

    component.field = mockField;
    component.isRunning = true;

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

    expect(cells[0].nativeElement.disabled).toBeFalse(); // active
    expect(cells[1].nativeElement.disabled).toBeTrue();  // hit
    expect(cells[2].nativeElement.disabled).toBeTrue();  // miss
    expect(cells[3].nativeElement.disabled).toBeTrue();  // idle
  });

});
