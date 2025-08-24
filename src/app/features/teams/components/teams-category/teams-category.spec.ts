import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCategory } from './teams-category';

describe('TeamsCategory', () => {
  let component: TeamsCategory;
  let fixture: ComponentFixture<TeamsCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
