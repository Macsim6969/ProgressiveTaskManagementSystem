import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TeamsByCategoryActions} from './teams-by-category-actions';

describe('TeamsByCategoryActions', () => {
  let component: TeamsByCategoryActions;
  let fixture: ComponentFixture<TeamsByCategoryActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsByCategoryActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsByCategoryActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
