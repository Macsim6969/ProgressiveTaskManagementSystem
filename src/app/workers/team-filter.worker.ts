/// <reference lib="webworker" />

import {Team} from '../features/teams/models/team.model';

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

addEventListener('message', ({data}) => {
  const {users} = data; // получаем массив с randomuser.me

  const teams: Team[] = users.map((u: any) => ({
    id: u.login.uuid,
    firstName: u.name.first,
    lastName: u.name.last,
    email: u.email,
    position: 'unknow',
    salary: randomInt(3000, 7000),
    experienceYears: randomInt(1, 15),
    birthDate: u.dob.date,
    tasks: [],
  }));

  postMessage(teams);
});
