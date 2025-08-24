import 'zone.js';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TeamsByCategoryCard } from './teams-by-category-card';
import { Team } from '../../models/team.model';

describe('TeamsByCategoryCard', () => {
  let fixture: ComponentFixture<TeamsByCategoryCard>;
  let component: TeamsByCategoryCard;

  const mockTeams: Team[] = [
    {
      id: '3m23k4m-s-d4fs0d-sdf-8sdf7',
      firstName: 'Anna',
      lastName: 'Koval',
      email: 'anna.koval@company.com',
      position: 'Project Manager',
      salary: 3500,
      experienceYears: 5,
      birthDate: '1990-04-12',
      tasks: [
        { id: 1, title: 'Планирование спринта', status: 'done', deadline: '2025-08-01', priority: 'high' },
        { id: 2, title: 'Презентация заказчику', status: 'in-progress', deadline: '2025-08-25', priority: 'medium' }
      ]
    },
    {
      id: '7sd8f9s-3d9s8d7f-2sdf0-sdf99',
      firstName: 'Oleh',
      lastName: 'Marchenko',
      email: 'oleh.marchenko@company.com',
      position: 'Project Manager',
      salary: 4200,
      experienceYears: 7,
      birthDate: '1987-11-05',
      tasks: [
        { id: 1, title: 'Формирование проектной команды', status: 'done', deadline: '2025-07-15', priority: 'high' },
        { id: 2, title: 'Анализ рисков', status: 'in-progress', deadline: '2025-09-10', priority: 'high' },
        { id: 3, title: 'Отчёт по бюджету', status: 'todo', deadline: '2025-08-30', priority: 'medium' }
      ]
    },
    {
      id: '9df8sd7-2k3j4h5-2fsd9-sd8f7',
      firstName: 'Iryna',
      lastName: 'Shevchenko',
      email: 'iryna.shevchenko@company.com',
      position: 'Project Manager',
      salary: 3900,
      experienceYears: 6,
      birthDate: '1992-02-18',
      tasks: [
        { id: 1, title: 'Подготовка roadmap проекта', status: 'in-progress', deadline: '2025-09-01', priority: 'high' },
        { id: 2, title: 'Встреча с инвесторами', status: 'todo', deadline: '2025-08-28', priority: 'high' },
        { id: 3, title: 'Утверждение требований', status: 'done', deadline: '2025-07-20', priority: 'medium' }
      ]
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsByCategoryCard] // standalone компонент
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsByCategoryCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all team cards', () => {
    component.teamByCategory = mockTeams;
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('.team-by-category-card'));
    expect(cards.length).toBe(3);
  });

  it('should display Anna K. with 5 years and 2 tasks', () => {
    component.teamByCategory = [mockTeams[0]];
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('.team-by-category-card-header-title')).nativeElement.textContent.trim();
    const bodyText = fixture.debugElement.query(By.css('.team-by-category-card-body')).nativeElement.textContent;

    expect(name).toBe('Anna K.');
    expect(bodyText).toContain('Experience year: 5');
    expect(bodyText).toContain(': 2');
  });

  it('should display Oleh M. with 7 years and 3 tasks', () => {
    component.teamByCategory = [mockTeams[1]];
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('.team-by-category-card-header-title')).nativeElement.textContent.trim();
    const bodyText = fixture.debugElement.query(By.css('.team-by-category-card-body')).nativeElement.textContent;

    expect(name).toBe('Oleh M.');
    expect(bodyText).toContain('Experience year: 7');
    expect(bodyText).toContain(': 3');
  });

  it('should display Iryna S. with 6 years and 3 tasks', () => {
    component.teamByCategory = [mockTeams[2]];
    fixture.detectChanges();

    const name = fixture.debugElement.query(By.css('.team-by-category-card-header-title')).nativeElement.textContent.trim();
    const bodyText = fixture.debugElement.query(By.css('.team-by-category-card-body')).nativeElement.textContent;

    expect(name).toBe('Iryna S.');
    expect(bodyText).toContain('Experience year: 6');
    expect(bodyText).toContain(': 3');
  });

  it('should set correct alt attribute on avatar', () => {
    component.teamByCategory = [mockTeams[0]];
    fixture.detectChanges();

    const avatar = fixture.debugElement.query(By.css('.team-by-category-card-header-avatar')).nativeElement as HTMLImageElement;
    expect(avatar.alt).toBe('Anna K.');
  });
});

