import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavigation } from './menu-navigation';

describe('MenuNavigation', () => {
  let component: MenuNavigation;
  let fixture: ComponentFixture<MenuNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
