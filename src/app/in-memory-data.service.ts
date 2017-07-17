import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero'},
      { id: 11, name: 'Iron Man' },
      { id: 12, name: 'Spider-man' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Halk' },
      { id: 15, name: 'Captain America' },
      { id: 16, name: 'Black Panther' },
      { id: 17, name: 'Captain Marvel' },
      { id: 18, name: 'Hawkeye' },
      { id: 19, name: 'Black Widow' },
      { id: 20, name: 'Warmachine' }
    ];
    return {heroes};
  }
}