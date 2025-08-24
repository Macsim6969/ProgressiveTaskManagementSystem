import {Team} from '../models/team.model';
import {TeamsCategoryType} from '../models/teams-category-type.model';

export const teamMembers: Record<TeamsCategoryType, Team[]> = {
  [TeamsCategoryType.ProjectManager]: [
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

  ],

  [TeamsCategoryType.TeamLead]: [
    {
      id: 'tl-001',
      firstName: 'Dmytro',
      lastName: 'Bondar',
      email: 'dmytro.bondar@company.com',
      position: 'Team Lead',
      salary: 5000,
      experienceYears: 8,
      birthDate: '1985-03-22',
      tasks: [
        { id: 1, title: 'Code Review', status: 'done', deadline: '2025-08-05', priority: 'high' },
        { id: 2, title: 'Менторинг команды', status: 'in-progress', deadline: '2025-08-12', priority: 'medium' },
        { id: 3, title: 'Синхронизация с PM', status: 'done', deadline: '2025-08-02', priority: 'low' },
        { id: 4, title: 'Настройка CI/CD', status: 'todo', deadline: '2025-08-30', priority: 'high' },
        { id: 5, title: 'Оптимизация кода', status: 'in-progress', deadline: '2025-09-03', priority: 'medium' },
        { id: 6, title: 'Обсуждение архитектуры', status: 'done', deadline: '2025-07-29', priority: 'medium' },
        { id: 7, title: 'Поддержка релиза', status: 'todo', deadline: '2025-09-01', priority: 'high' },
        { id: 8, title: 'Техдолг', status: 'in-progress', deadline: '2025-08-18', priority: 'low' }
      ]
    },
    {
      id: 'tl-002',
      firstName: 'Sergiy',
      lastName: 'Tkachenko',
      email: 'sergiy.tkachenko@company.com',
      position: 'Team Lead',
      salary: 4800,
      experienceYears: 7,
      birthDate: '1988-09-14',
      tasks: [
        { id: 9, title: 'Онбординг новых разработчиков', status: 'todo', deadline: '2025-08-25', priority: 'high' },
        { id: 10, title: 'Составление технических требований', status: 'done', deadline: '2025-07-31', priority: 'medium' },
        { id: 11, title: 'Митинг с QA', status: 'in-progress', deadline: '2025-08-08', priority: 'low' },
        { id: 12, title: 'Архитектурный рефакторинг', status: 'todo', deadline: '2025-09-05', priority: 'high' },
        { id: 13, title: 'Подготовка к демо', status: 'done', deadline: '2025-08-10', priority: 'medium' },
        { id: 14, title: 'Интервью кандидатов', status: 'in-progress', deadline: '2025-08-20', priority: 'medium' },
        { id: 15, title: 'Координация спринта', status: 'todo', deadline: '2025-08-28', priority: 'high' },
        { id: 16, title: 'Документация API', status: 'done', deadline: '2025-07-22', priority: 'low' }
      ]
    },
    {
      id: 'tl-003',
      firstName: 'Olena',
      lastName: 'Hrytsenko',
      email: 'olena.hrytsenko@company.com',
      position: 'Team Lead',
      salary: 5100,
      experienceYears: 9,
      birthDate: '1984-12-03',
      tasks: [
        { id: 17, title: 'Распределение задач в команде', status: 'in-progress', deadline: '2025-08-07', priority: 'high' },
        { id: 18, title: 'Обновление roadmap', status: 'todo', deadline: '2025-09-01', priority: 'medium' },
        { id: 19, title: 'Интеграция модулей', status: 'done', deadline: '2025-08-02', priority: 'high' },
        { id: 20, title: 'Техническая сессия', status: 'in-progress', deadline: '2025-08-16', priority: 'low' },
        { id: 21, title: 'Поддержка DevOps', status: 'todo', deadline: '2025-09-07', priority: 'medium' },
        { id: 22, title: 'Митинг с заказчиком', status: 'done', deadline: '2025-07-28', priority: 'high' },
        { id: 23, title: 'Анализ производительности', status: 'in-progress', deadline: '2025-08-19', priority: 'medium' },
        { id: 24, title: 'Обновление dependency', status: 'todo', deadline: '2025-09-10', priority: 'low' }
      ]
    }
  ],

  [TeamsCategoryType.QA]: [
    {
      id: 'qa-001',
      firstName: 'Andriy',
      lastName: 'Kravets',
      email: 'andriy.kravets@company.com',
      position: 'QA Engineer',
      salary: 2800,
      experienceYears: 3,
      birthDate: '1995-01-11',
      tasks: [
        { id: 1, title: 'Smoke тестирование релиза', status: 'done', deadline: '2025-08-03', priority: 'high' },
        { id: 2, title: 'Регрессионные тесты', status: 'in-progress', deadline: '2025-08-10', priority: 'high' },
        { id: 3, title: 'Тестирование авторизации', status: 'todo', deadline: '2025-08-15', priority: 'medium' },
        { id: 4, title: 'Mobile UI тесты', status: 'in-progress', deadline: '2025-08-20', priority: 'low' },
        { id: 5, title: 'Отчет по багам', status: 'done', deadline: '2025-07-30', priority: 'medium' },
        { id: 6, title: 'Тестирование API', status: 'todo', deadline: '2025-08-25', priority: 'high' },
        { id: 7, title: 'Performance тесты', status: 'in-progress', deadline: '2025-09-01', priority: 'medium' },
        { id: 8, title: 'Интеграционные тесты', status: 'todo', deadline: '2025-09-05', priority: 'high' }
      ]
    },
    {
      id: 'qa-002',
      firstName: 'Maria',
      lastName: 'Danylova',
      email: 'maria.danylova@company.com',
      position: 'QA Engineer',
      salary: 3000,
      experienceYears: 4,
      birthDate: '1993-06-19',
      tasks: [
        { id: 9, title: 'UI тесты формы регистрации', status: 'in-progress', deadline: '2025-08-12', priority: 'medium' },
        { id: 10, title: 'Отчет по автотестам', status: 'done', deadline: '2025-08-01', priority: 'low' },
        { id: 11, title: 'Smoke тест после деплоя', status: 'todo', deadline: '2025-08-17', priority: 'high' },
        { id: 12, title: 'Security тесты', status: 'in-progress', deadline: '2025-08-22', priority: 'high' },
        { id: 13, title: 'Тестирование API платежей', status: 'done', deadline: '2025-07-27', priority: 'medium' },
        { id: 14, title: 'Regression suite', status: 'todo', deadline: '2025-08-28', priority: 'high' },
        { id: 15, title: 'Баг-репорт по UI', status: 'done', deadline: '2025-08-05', priority: 'low' }
      ]
    },
    {
      id: 'qa-003',
      firstName: 'Oleksii',
      lastName: 'Yaremchuk',
      email: 'oleksii.yaremchuk@company.com',
      position: 'QA Engineer',
      salary: 3100,
      experienceYears: 5,
      birthDate: '1990-03-08',
      tasks: [
        { id: 16, title: 'API нагрузочные тесты', status: 'in-progress', deadline: '2025-08-14', priority: 'high' },
        { id: 17, title: 'Проверка кросс-браузерности', status: 'todo', deadline: '2025-08-20', priority: 'medium' },
        { id: 18, title: 'Функциональные тесты', status: 'done', deadline: '2025-07-29', priority: 'high' },
        { id: 19, title: 'Mobile smoke тесты', status: 'in-progress', deadline: '2025-08-23', priority: 'low' },
        { id: 20, title: 'Отчет по найденным багам', status: 'todo', deadline: '2025-08-27', priority: 'medium' },
        { id: 21, title: 'Тестирование API логина', status: 'done', deadline: '2025-08-04', priority: 'high' },
        { id: 22, title: 'Тестирование UI Dashboard', status: 'todo', deadline: '2025-09-02', priority: 'medium' }
      ]
    },
    {
      id: 'qa-004',
      firstName: 'Tetiana',
      lastName: 'Polishchuk',
      email: 'tetiana.polishchuk@company.com',
      position: 'QA Engineer',
      salary: 2950,
      experienceYears: 4,
      birthDate: '1994-11-25',
      tasks: [
        { id: 23, title: 'Smoke тестирование checkout', status: 'done', deadline: '2025-07-31', priority: 'high' },
        { id: 24, title: 'Тестирование UI админки', status: 'in-progress', deadline: '2025-08-13', priority: 'medium' },
        { id: 25, title: 'Performance тест БД', status: 'todo', deadline: '2025-08-29', priority: 'high' },
        { id: 26, title: 'Regression тест платежей', status: 'done', deadline: '2025-08-06', priority: 'medium' },
        { id: 27, title: 'Интеграционные тесты API', status: 'in-progress', deadline: '2025-08-18', priority: 'low' },
        { id: 28, title: 'Тестирование логирования', status: 'todo', deadline: '2025-09-04', priority: 'medium' },
        { id: 29, title: 'Баг-репорт UI ошибок', status: 'done', deadline: '2025-08-02', priority: 'low' }
      ]
    },
    {
      id: 'qa-005',
      firstName: 'Ivan',
      lastName: 'Kostyuk',
      email: 'ivan.kostyuk@company.com',
      position: 'QA Engineer',
      salary: 3050,
      experienceYears: 6,
      birthDate: '1989-12-01',
      tasks: [
        { id: 30, title: 'Smoke тесты API', status: 'todo', deadline: '2025-08-09', priority: 'high' },
        { id: 31, title: 'Тестирование авторизации OAuth', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 32, title: 'Регрессионные UI тесты', status: 'done', deadline: '2025-07-26', priority: 'high' },
        { id: 33, title: 'Баг-репорт по платежам', status: 'in-progress', deadline: '2025-08-19', priority: 'medium' },
        { id: 34, title: 'Кросс-платформенное тестирование', status: 'todo', deadline: '2025-08-24', priority: 'low' },
        { id: 35, title: 'Отчет QA по спринту', status: 'done', deadline: '2025-08-05', priority: 'medium' },
        { id: 36, title: 'Тестирование push-уведомлений', status: 'todo', deadline: '2025-09-06', priority: 'high' }
      ]
    },
    {
      id: 'qa-006',
      firstName: 'Yulia',
      lastName: 'Khmil',
      email: 'yulia.khmil@company.com',
      position: 'QA Engineer',
      salary: 2900,
      experienceYears: 3,
      birthDate: '1996-04-09',
      tasks: [
        { id: 37, title: 'UI smoke тесты', status: 'in-progress', deadline: '2025-08-11', priority: 'medium' },
        { id: 38, title: 'Security тесты JWT', status: 'done', deadline: '2025-07-28', priority: 'high' },
        { id: 39, title: 'Регрессионные API тесты', status: 'todo', deadline: '2025-08-22', priority: 'medium' },
        { id: 40, title: 'Тестирование UX', status: 'in-progress', deadline: '2025-08-27', priority: 'low' },
        { id: 41, title: 'Отчет по багам UI', status: 'done', deadline: '2025-08-03', priority: 'low' },
        { id: 42, title: 'Performance тест Frontend', status: 'todo', deadline: '2025-09-02', priority: 'high' },
        { id: 43, title: 'Автотесты на Cypress', status: 'in-progress', deadline: '2025-08-16', priority: 'medium' },
        { id: 44, title: 'Документация тест-кейсов', status: 'done', deadline: '2025-08-07', priority: 'medium' },
        { id: 45, title: 'Тестирование обновлений зависимостей', status: 'todo', deadline: '2025-09-08', priority: 'low' }
      ]
    }
  ],

  [TeamsCategoryType.FrontendDeveloper]: [
    {
      id: 'fe-1',
      firstName: 'Ivan',
      lastName: 'Shevchenko',
      email: 'ivan.shevchenko@company.com',
      position: 'Front-end Developer',
      salary: 2700,
      experienceYears: 4,
      birthDate: '1993-02-14',
      tasks: [
        { id: 1, title: 'Верстка лендинга', status: 'done', deadline: '2025-08-05', priority: 'high' },
        { id: 2, title: 'Оптимизация стилей', status: 'in-progress', deadline: '2025-08-10', priority: 'medium' },
        { id: 3, title: 'Code review', status: 'todo', deadline: '2025-08-12', priority: 'low' },
        { id: 4, title: 'Исправление багов UI', status: 'in-progress', deadline: '2025-08-15', priority: 'high' },
        { id: 5, title: 'Интеграция Material UI', status: 'done', deadline: '2025-08-18', priority: 'medium' },
        { id: 6, title: 'Сетевые запросы API', status: 'in-progress', deadline: '2025-08-20', priority: 'high' },
        { id: 7, title: 'Написание unit-тестов', status: 'todo', deadline: '2025-08-23', priority: 'medium' },
        { id: 8, title: 'Рефакторинг компонентов', status: 'done', deadline: '2025-08-28', priority: 'medium' },
        { id: 9, title: 'Фикс адаптивности', status: 'todo', deadline: '2025-08-29', priority: 'high' }
      ]
    },
    {
      id: 'fe-2',
      firstName: 'Olga',
      lastName: 'Melnyk',
      email: 'olga.melnyk@company.com',
      position: 'Front-end Developer',
      salary: 2600,
      experienceYears: 3,
      birthDate: '1995-07-21',
      tasks: [
        { id: 10, title: 'Реализация lazy-loading', status: 'done', deadline: '2025-08-04', priority: 'high' },
        { id: 11, title: 'Обновление Angular', status: 'in-progress', deadline: '2025-08-07', priority: 'high' },
        { id: 12, title: 'Добавление i18n', status: 'todo', deadline: '2025-08-11', priority: 'medium' },
        { id: 13, title: 'Создание пайпов', status: 'done', deadline: '2025-08-14', priority: 'low' },
        { id: 14, title: 'Интеграция Chart.js', status: 'in-progress', deadline: '2025-08-17', priority: 'medium' },
        { id: 15, title: 'Доработка фильтрации', status: 'done', deadline: '2025-08-22', priority: 'medium' },
        { id: 16, title: 'Исправление UX багов', status: 'todo', deadline: '2025-08-24', priority: 'high' },
        { id: 17, title: 'Реализация модальных окон', status: 'in-progress', deadline: '2025-08-27', priority: 'medium' }
      ]
    },
    {
      id: 'fe-3',
      firstName: 'Andriy',
      lastName: 'Bondarenko',
      email: 'andriy.bondarenko@company.com',
      position: 'Front-end Developer',
      salary: 2900,
      experienceYears: 5,
      birthDate: '1991-12-01',
      tasks: [
        { id: 18, title: 'Настройка webpack', status: 'done', deadline: '2025-08-02', priority: 'high' },
        { id: 19, title: 'SSR для SEO', status: 'in-progress', deadline: '2025-08-09', priority: 'high' },
        { id: 20, title: 'Auth Guard', status: 'done', deadline: '2025-08-12', priority: 'medium' },
        { id: 21, title: 'Реализация interceptor', status: 'todo', deadline: '2025-08-15', priority: 'medium' },
        { id: 22, title: 'State management (NgRx)', status: 'in-progress', deadline: '2025-08-19', priority: 'high' },
        { id: 23, title: 'Анимации компонентов', status: 'done', deadline: '2025-08-21', priority: 'medium' },
        { id: 24, title: 'Форма Reactive', status: 'todo', deadline: '2025-08-26', priority: 'medium' },
        { id: 25, title: 'Ленивая подгрузка модулей', status: 'done', deadline: '2025-08-30', priority: 'high' }
      ]
    },
    {
      id: 'fe-4',
      firstName: 'Dmytro',
      lastName: 'Horobets',
      email: 'dmytro.horobets@company.com',
      position: 'Front-end Developer',
      salary: 2500,
      experienceYears: 2,
      birthDate: '1997-05-16',
      tasks: [
        { id: 26, title: 'Работа с Observables', status: 'in-progress', deadline: '2025-08-03', priority: 'high' },
        { id: 27, title: 'Валидация форм', status: 'done', deadline: '2025-08-08', priority: 'medium' },
        { id: 28, title: 'Реализация paginator', status: 'in-progress', deadline: '2025-08-13', priority: 'medium' },
        { id: 29, title: 'UI accessibility', status: 'todo', deadline: '2025-08-16', priority: 'high' },
        { id: 30, title: 'Drag & Drop', status: 'done', deadline: '2025-08-19', priority: 'low' },
        { id: 31, title: 'Unit тестирование сервисов', status: 'todo', deadline: '2025-08-23', priority: 'medium' },
        { id: 32, title: 'Фикс навигации', status: 'in-progress', deadline: '2025-08-27', priority: 'high' }
      ]
    },
    {
      id: 'fe-5',
      firstName: 'Svitlana',
      lastName: 'Kravets',
      email: 'svitlana.kravets@company.com',
      position: 'Front-end Developer',
      salary: 3000,
      experienceYears: 6,
      birthDate: '1989-09-25',
      tasks: [
        { id: 33, title: 'NgRx selectors', status: 'done', deadline: '2025-08-06', priority: 'high' },
        { id: 34, title: 'Push pipe внедрение', status: 'todo', deadline: '2025-08-09', priority: 'medium' },
        { id: 35, title: 'ChangeDetection OnPush', status: 'in-progress', deadline: '2025-08-13', priority: 'high' },
        { id: 36, title: 'Оптимизация таблицы', status: 'done', deadline: '2025-08-18', priority: 'medium' },
        { id: 37, title: 'Lazy load images', status: 'in-progress', deadline: '2025-08-22', priority: 'medium' },
        { id: 38, title: 'Использование trackBy', status: 'done', deadline: '2025-08-26', priority: 'low' },
        { id: 39, title: 'Оптимизация change detection', status: 'todo', deadline: '2025-08-29', priority: 'high' },
        { id: 40, title: 'SSR hydration', status: 'done', deadline: '2025-08-31', priority: 'medium' }
      ]
    },
    {
      id: 'fe-6',
      firstName: 'Yurii',
      lastName: 'Marchenko',
      email: 'yurii.marchenko@company.com',
      position: 'Front-end Developer',
      salary: 2400,
      experienceYears: 2,
      birthDate: '1998-04-10',
      tasks: [
        { id: 41, title: 'WebSocket client', status: 'in-progress', deadline: '2025-08-05', priority: 'medium' },
        { id: 42, title: 'Интеграция SignalR', status: 'todo', deadline: '2025-08-09', priority: 'high' },
        { id: 43, title: 'Создание чата', status: 'done', deadline: '2025-08-14', priority: 'high' },
        { id: 44, title: 'Push notifications', status: 'in-progress', deadline: '2025-08-17', priority: 'medium' },
        { id: 45, title: 'Drag&Drop файлов', status: 'done', deadline: '2025-08-22', priority: 'medium' },
        { id: 46, title: 'Custom directives', status: 'todo', deadline: '2025-08-27', priority: 'high' },
        { id: 47, title: 'UI Skeleton loader', status: 'done', deadline: '2025-08-29', priority: 'medium' }
      ]
    },
    {
      id: 'fe-7',
      firstName: 'Natalia',
      lastName: 'Hrytsenko',
      email: 'natalia.hrytsenko@company.com',
      position: 'Front-end Developer',
      salary: 2800,
      experienceYears: 4,
      birthDate: '1992-11-03',
      tasks: [
        { id: 48, title: 'Создание shared-модуля', status: 'in-progress', deadline: '2025-08-03', priority: 'medium' },
        { id: 49, title: 'Оптимизация bundle size', status: 'done', deadline: '2025-08-07', priority: 'high' },
        { id: 50, title: 'PreloadingStrategy', status: 'todo', deadline: '2025-08-12', priority: 'medium' },
        { id: 51, title: 'Оптимизация роутинга', status: 'done', deadline: '2025-08-16', priority: 'medium' },
        { id: 52, title: 'Guard с правами доступа', status: 'in-progress', deadline: '2025-08-20', priority: 'high' },
        { id: 53, title: 'Custom error handler', status: 'todo', deadline: '2025-08-23', priority: 'medium' },
        { id: 54, title: 'Route reuse strategy', status: 'done', deadline: '2025-08-27', priority: 'low' },
        { id: 55, title: 'Реализация breadcrumb', status: 'in-progress', deadline: '2025-08-30', priority: 'medium' }
      ]
    },
    {
      id: 'fe-8',
      firstName: 'Oleksandr',
      lastName: 'Tkachenko',
      email: 'oleksandr.tkachenko@company.com',
      position: 'Front-end Developer',
      salary: 3100,
      experienceYears: 7,
      birthDate: '1987-03-15',
      tasks: [
        { id: 56, title: 'GraphQL client setup', status: 'done', deadline: '2025-08-04', priority: 'high' },
        { id: 57, title: 'Apollo cache config', status: 'in-progress', deadline: '2025-08-08', priority: 'medium' },
        { id: 58, title: 'Интеграция Auth0', status: 'todo', deadline: '2025-08-12', priority: 'high' },
        { id: 59, title: 'JWT refresh tokens', status: 'done', deadline: '2025-08-16', priority: 'medium' },
        { id: 60, title: 'Middleware для API', status: 'in-progress', deadline: '2025-08-20', priority: 'medium' },
        { id: 61, title: 'Sentry интеграция', status: 'done', deadline: '2025-08-24', priority: 'low' },
        { id: 62, title: 'Обновление GraphQL схемы', status: 'todo', deadline: '2025-08-28', priority: 'high' },
        { id: 63, title: 'Оптимизация запросов', status: 'done', deadline: '2025-08-31', priority: 'medium' }
      ]
    },
    {
      id: 'fe-9',
      firstName: 'Maksym',
      lastName: 'Danylko',
      email: 'maksym.danylko@company.com',
      position: 'Front-end Developer',
      salary: 2450,
      experienceYears: 2,
      birthDate: '1999-01-19',
      tasks: [
        { id: 64, title: 'Создание UI-kit', status: 'in-progress', deadline: '2025-08-05', priority: 'high' },
        { id: 65, title: 'Storybook setup', status: 'done', deadline: '2025-08-09', priority: 'medium' },
        { id: 66, title: 'Документация компонентов', status: 'todo', deadline: '2025-08-13', priority: 'low' },
        { id: 67, title: 'CI/CD настройка', status: 'done', deadline: '2025-08-18', priority: 'medium' },
        { id: 68, title: 'Docker для фронта', status: 'in-progress', deadline: '2025-08-21', priority: 'high' },
        { id: 69, title: 'Оптимизация билдов', status: 'todo', deadline: '2025-08-25', priority: 'medium' },
        { id: 70, title: 'Создание release notes', status: 'done', deadline: '2025-08-29', priority: 'low' }
      ]
    },
    {
      id: 'fe-10',
      firstName: 'Kateryna',
      lastName: 'Lysenko',
      email: 'kateryna.lysenko@company.com',
      position: 'Front-end Developer',
      salary: 2950,
      experienceYears: 5,
      birthDate: '1990-06-28',
      tasks: [
        { id: 71, title: 'Создание shared service', status: 'in-progress', deadline: '2025-08-06', priority: 'medium' },
        { id: 72, title: 'Оптимизация NgModules', status: 'done', deadline: '2025-08-10', priority: 'high' },
        { id: 73, title: 'Feature toggle', status: 'todo', deadline: '2025-08-14', priority: 'medium' },
        { id: 74, title: 'AB тестирование', status: 'done', deadline: '2025-08-18', priority: 'low' },
        { id: 75, title: 'Performance audit', status: 'in-progress', deadline: '2025-08-22', priority: 'high' },
        { id: 76, title: 'NgZone оптимизация', status: 'done', deadline: '2025-08-26', priority: 'medium' },
        { id: 77, title: 'Оптимизация загрузки изображений', status: 'todo', deadline: '2025-08-29', priority: 'medium' },
        { id: 78, title: 'SSR caching', status: 'done', deadline: '2025-08-31', priority: 'high' }
      ]
    }
  ],

  [TeamsCategoryType.BackendDeveloper]: [
    {
      id: 'bd-001',
      firstName: 'Ivan',
      lastName: 'Melnyk',
      email: 'ivan.melnyk@company.com',
      position: 'Backend Developer',
      salary: 4100,
      experienceYears: 6,
      birthDate: '1989-06-15',
      tasks: [
        { id: 1, title: 'API авторизация', status: 'done', deadline: '2025-08-05', priority: 'high' },
        { id: 2, title: 'Рефакторинг user-service', status: 'in-progress', deadline: '2025-08-10', priority: 'medium' },
        { id: 3, title: 'Добавить логирование', status: 'todo', deadline: '2025-08-18', priority: 'low' },
        { id: 4, title: 'Unit тесты для Auth', status: 'in-progress', deadline: '2025-08-20', priority: 'medium' },
        { id: 5, title: 'Оптимизация SQL-запросов', status: 'done', deadline: '2025-08-22', priority: 'high' },
        { id: 6, title: 'Создать миграции БД', status: 'todo', deadline: '2025-08-25', priority: 'medium' },
        { id: 7, title: 'Bugfix в NotificationService', status: 'in-progress', deadline: '2025-08-28', priority: 'medium' },
        { id: 8, title: 'Добавить swagger документацию', status: 'todo', deadline: '2025-09-01', priority: 'low' },
        { id: 9, title: 'CI/CD настройка для backend', status: 'done', deadline: '2025-09-05', priority: 'high' }
      ]
    },
    {
      id: 'bd-002',
      firstName: 'Olena',
      lastName: 'Kravchenko',
      email: 'olena.kravchenko@company.com',
      position: 'Backend Developer',
      salary: 3950,
      experienceYears: 4,
      birthDate: '1992-02-11',
      tasks: [
        { id: 10, title: 'Разработка отчётного сервиса', status: 'done', deadline: '2025-08-06', priority: 'medium' },
        { id: 11, title: 'Интеграция с платежным API', status: 'todo', deadline: '2025-08-11', priority: 'high' },
        { id: 12, title: 'Кэширование Redis', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 13, title: 'Профилирование памяти', status: 'todo', deadline: '2025-08-19', priority: 'low' },
        { id: 14, title: 'Рефакторинг error handler', status: 'done', deadline: '2025-08-20', priority: 'medium' },
        { id: 15, title: 'Поддержка OAuth2', status: 'in-progress', deadline: '2025-08-24', priority: 'high' },
        { id: 16, title: 'GraphQL endpoint', status: 'todo', deadline: '2025-08-26', priority: 'medium' },
        { id: 17, title: 'Health-check endpoints', status: 'done', deadline: '2025-08-29', priority: 'low' },
        { id: 18, title: 'Docker-compose обновление', status: 'in-progress', deadline: '2025-09-02', priority: 'medium' }
      ]
    },
    {
      id: 'bd-003',
      firstName: 'Andriy',
      lastName: 'Shevchenko',
      email: 'andriy.shevchenko@company.com',
      position: 'Backend Developer',
      salary: 4300,
      experienceYears: 7,
      birthDate: '1988-09-21',
      tasks: [
        { id: 19, title: 'Разработка FileService', status: 'todo', deadline: '2025-08-05', priority: 'high' },
        { id: 20, title: 'Оптимизация очередей RabbitMQ', status: 'in-progress', deadline: '2025-08-10', priority: 'medium' },
        { id: 21, title: 'Unit тесты репозиториев', status: 'done', deadline: '2025-08-14', priority: 'low' },
        { id: 22, title: 'JWT refresh tokens', status: 'todo', deadline: '2025-08-18', priority: 'high' },
        { id: 23, title: 'Bugfix в DataService', status: 'done', deadline: '2025-08-21', priority: 'medium' },
        { id: 24, title: 'API версия 2.0', status: 'in-progress', deadline: '2025-08-25', priority: 'medium' },
        { id: 25, title: 'ELK stack интеграция', status: 'todo', deadline: '2025-08-28', priority: 'medium' },
        { id: 26, title: 'Модульное тестирование API', status: 'done', deadline: '2025-09-01', priority: 'low' },
        { id: 27, title: 'Code review', status: 'in-progress', deadline: '2025-09-04', priority: 'medium' }
      ]
    },
    {
      id: 'bd-004',
      firstName: 'Kateryna',
      lastName: 'Bondar',
      email: 'kateryna.bondar@company.com',
      position: 'Backend Developer',
      salary: 3800,
      experienceYears: 3,
      birthDate: '1994-12-01',
      tasks: [
        { id: 28, title: 'Service для уведомлений', status: 'done', deadline: '2025-08-06', priority: 'medium' },
        { id: 29, title: 'PostgreSQL оптимизация', status: 'todo', deadline: '2025-08-09', priority: 'high' },
        { id: 30, title: 'Bugfix userController', status: 'in-progress', deadline: '2025-08-13', priority: 'medium' },
        { id: 31, title: 'Swagger обновление', status: 'todo', deadline: '2025-08-17', priority: 'low' },
        { id: 32, title: 'Email templates сервис', status: 'done', deadline: '2025-08-21', priority: 'medium' },
        { id: 33, title: 'Docker оптимизация', status: 'in-progress', deadline: '2025-08-24', priority: 'medium' },
        { id: 34, title: 'Миграции для orders', status: 'todo', deadline: '2025-08-28', priority: 'medium' },
        { id: 35, title: 'Unit тесты Notification', status: 'done', deadline: '2025-09-02', priority: 'low' },
        { id: 36, title: 'gRPC сервис', status: 'in-progress', deadline: '2025-09-06', priority: 'high' }
      ]
    },
    {
      id: 'bd-005',
      firstName: 'Dmytro',
      lastName: 'Lysenko',
      email: 'dmytro.lysenko@company.com',
      position: 'Backend Developer',
      salary: 4000,
      experienceYears: 5,
      birthDate: '1990-05-20',
      tasks: [
        { id: 37, title: 'Auth Service рефакторинг', status: 'done', deadline: '2025-08-08', priority: 'high' },
        { id: 38, title: 'Bugfix в CartService', status: 'todo', deadline: '2025-08-12', priority: 'medium' },
        { id: 39, title: 'API Gateway обновление', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 40, title: 'Репликация БД', status: 'todo', deadline: '2025-08-18', priority: 'high' },
        { id: 41, title: 'Модуль PaymentService', status: 'done', deadline: '2025-08-21', priority: 'medium' },
        { id: 42, title: 'Bugfix kafka-consumer', status: 'in-progress', deadline: '2025-08-24', priority: 'medium' },
        { id: 43, title: 'Unit тесты CartService', status: 'todo', deadline: '2025-08-27', priority: 'medium' },
        { id: 44, title: 'CI обновление', status: 'done', deadline: '2025-09-01', priority: 'low' },
        { id: 45, title: 'Kubernetes настройка', status: 'in-progress', deadline: '2025-09-04', priority: 'high' }
      ]
    },
    {
      id: 'bd-006',
      firstName: 'Oksana',
      lastName: 'Hrytsenko',
      email: 'oksana.hrytsenko@company.com',
      position: 'Backend Developer',
      salary: 3850,
      experienceYears: 4,
      birthDate: '1993-03-30',
      tasks: [
        { id: 46, title: 'Разработка EventService', status: 'done', deadline: '2025-08-07', priority: 'medium' },
        { id: 47, title: 'Интеграция AWS S3', status: 'todo', deadline: '2025-08-11', priority: 'high' },
        { id: 48, title: 'Unit тесты EventService', status: 'in-progress', deadline: '2025-08-14', priority: 'medium' },
        { id: 49, title: 'Service Discovery', status: 'todo', deadline: '2025-08-18', priority: 'low' },
        { id: 50, title: 'Bugfix EmailService', status: 'done', deadline: '2025-08-20', priority: 'medium' },
        { id: 51, title: 'GraphQL subscriptions', status: 'in-progress', deadline: '2025-08-24', priority: 'medium' },
        { id: 52, title: 'Redis Streams', status: 'todo', deadline: '2025-08-27', priority: 'medium' },
        { id: 53, title: 'Unit тесты Kafka', status: 'done', deadline: '2025-09-02', priority: 'low' },
        { id: 54, title: 'OpenTelemetry внедрение', status: 'in-progress', deadline: '2025-09-06', priority: 'high' }
      ]
    },
    {
      id: 'bd-007',
      firstName: 'Serhii',
      lastName: 'Tkachenko',
      email: 'serhii.tkachenko@company.com',
      position: 'Backend Developer',
      salary: 4450,
      experienceYears: 8,
      birthDate: '1987-10-09',
      tasks: [
        { id: 55, title: 'Billing Service', status: 'done', deadline: '2025-08-06', priority: 'high' },
        { id: 56, title: 'API rate limiting', status: 'todo', deadline: '2025-08-11', priority: 'medium' },
        { id: 57, title: 'Bugfix ReportingService', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 58, title: 'Unit тесты Billing', status: 'todo', deadline: '2025-08-19', priority: 'medium' },
        { id: 59, title: 'gRPC auth service', status: 'done', deadline: '2025-08-22', priority: 'medium' },
        { id: 60, title: 'CI/CD pipelines', status: 'in-progress', deadline: '2025-08-26', priority: 'medium' },
        { id: 61, title: 'Bugfix API Gateway', status: 'todo', deadline: '2025-08-29', priority: 'high' },
        { id: 62, title: 'Unit тесты auth', status: 'done', deadline: '2025-09-02', priority: 'low' },
        { id: 63, title: 'Рефакторинг Billing API', status: 'in-progress', deadline: '2025-09-05', priority: 'medium' }
      ]
    },
    {
      id: 'bd-008',
      firstName: 'Mariya',
      lastName: 'Ivchenko',
      email: 'mariya.ivchenko@company.com',
      position: 'Backend Developer',
      salary: 3900,
      experienceYears: 4,
      birthDate: '1991-07-19',
      tasks: [
        { id: 64, title: 'Order Service оптимизация', status: 'done', deadline: '2025-08-07', priority: 'high' },
        { id: 65, title: 'Bugfix inventory-service', status: 'todo', deadline: '2025-08-12', priority: 'medium' },
        { id: 66, title: 'Unit тесты OrderService', status: 'in-progress', deadline: '2025-08-16', priority: 'medium' },
        { id: 67, title: 'Сервисный слой Catalog', status: 'todo', deadline: '2025-08-20', priority: 'medium' },
        { id: 68, title: 'GraphQL API для Catalog', status: 'done', deadline: '2025-08-22', priority: 'medium' },
        { id: 69, title: 'Bugfix CartService', status: 'in-progress', deadline: '2025-08-25', priority: 'high' },
        { id: 70, title: 'Unit тесты Catalog', status: 'todo', deadline: '2025-08-29', priority: 'medium' },
        { id: 71, title: 'Kafka интеграция', status: 'done', deadline: '2025-09-03', priority: 'low' },
        { id: 72, title: 'K8s обновление', status: 'in-progress', deadline: '2025-09-06', priority: 'medium' }
      ]
    },
    {
      id: 'bd-009',
      firstName: 'Yurii',
      lastName: 'Koval',
      email: 'yurii.koval@company.com',
      position: 'Backend Developer',
      salary: 4200,
      experienceYears: 6,
      birthDate: '1989-01-23',
      tasks: [
        { id: 73, title: 'API для mobile app', status: 'done', deadline: '2025-08-09', priority: 'high' },
        { id: 74, title: 'Bugfix NotificationService', status: 'todo', deadline: '2025-08-13', priority: 'medium' },
        { id: 75, title: 'Unit тесты mobile API', status: 'in-progress', deadline: '2025-08-17', priority: 'medium' },
        { id: 76, title: 'JWT blacklisting', status: 'todo', deadline: '2025-08-21', priority: 'high' },
        { id: 77, title: 'Bugfix user-service', status: 'done', deadline: '2025-08-24', priority: 'medium' },
        { id: 78, title: 'CI/CD mobile', status: 'in-progress', deadline: '2025-08-27', priority: 'medium' },
        { id: 79, title: 'API Gateway auth', status: 'todo', deadline: '2025-08-30', priority: 'medium' },
        { id: 80, title: 'Unit тесты gateway', status: 'done', deadline: '2025-09-03', priority: 'low' },
        { id: 81, title: 'Bugfix в AuthService', status: 'in-progress', deadline: '2025-09-07', priority: 'medium' }
      ]
    },
    {
      id: 'bd-010',
      firstName: 'Natalia',
      lastName: 'Horbach',
      email: 'natalia.horbach@company.com',
      position: 'Backend Developer',
      salary: 4050,
      experienceYears: 5,
      birthDate: '1992-11-27',
      tasks: [
        { id: 82, title: 'Сервис ReportGenerator', status: 'done', deadline: '2025-08-08', priority: 'medium' },
        { id: 83, title: 'Bugfix scheduler', status: 'todo', deadline: '2025-08-11', priority: 'medium' },
        { id: 84, title: 'Unit тесты ReportService', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 85, title: 'Оптимизация cron jobs', status: 'todo', deadline: '2025-08-18', priority: 'high' },
        { id: 86, title: 'Bugfix data-service', status: 'done', deadline: '2025-08-21', priority: 'medium' },
        { id: 87, title: 'GraphQL Reports API', status: 'in-progress', deadline: '2025-08-24', priority: 'medium' },
        { id: 88, title: 'Unit тесты Reports', status: 'todo', deadline: '2025-08-28', priority: 'medium' },
        { id: 89, title: 'Рефакторинг отчётных запросов', status: 'in-progress', deadline: '2025-09-03', priority: 'high' },
        { id: 90, title: 'Настройка алертов (Alertmanager)', status: 'todo', deadline: '2025-09-06', priority: 'low' }
      ]
    }
  ],

  [TeamsCategoryType.Devops]: [
    {
      id: 'd1',
      firstName: 'Volodymyr',
      lastName: 'Khmelyov',
      email: 'volodymyr.khmelyov@company.com',
      position: 'Devops',
      salary: 4500,
      experienceYears: 5,
      birthDate: '1988-04-12',
      tasks: [
        { id: 1, title: 'Настройка CI/CD пайплайна', status: 'done', deadline: '2025-08-10', priority: 'high' },
        { id: 2, title: 'Оптимизация Docker образов', status: 'in-progress', deadline: '2025-08-15', priority: 'medium' },
        { id: 3, title: 'Мониторинг Prometheus', status: 'todo', deadline: '2025-08-20', priority: 'medium' }
      ]
    },
    {
      id: 'd2',
      firstName: 'Iryna',
      lastName: 'Bondar',
      email: 'iryna.bondar@company.com',
      position: 'Devops',
      salary: 4400,
      experienceYears: 4,
      birthDate: '1990-11-05',
      tasks: [
        { id: 4, title: 'Kubernetes настройка', status: 'in-progress', deadline: '2025-08-12', priority: 'high' },
        { id: 5, title: 'Обновление Helm charts', status: 'todo', deadline: '2025-08-18', priority: 'medium' }
      ]
    },
    {
      id: 'd3',
      firstName: 'Andriy',
      lastName: 'Melnyk',
      email: 'andriy.melnyk@company.com',
      position: 'Devops',
      salary: 4300,
      experienceYears: 3,
      birthDate: '1992-07-20',
      tasks: [
        { id: 6, title: 'Логи и алерты (ELK Stack)', status: 'todo', deadline: '2025-08-14', priority: 'medium' },
        { id: 7, title: 'Оптимизация CI/CD runner', status: 'in-progress', deadline: '2025-08-22', priority: 'medium' }
      ]
    }
  ]
};
