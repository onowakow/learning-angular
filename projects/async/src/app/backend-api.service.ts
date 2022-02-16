import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})

export class BackendAPIService implements InMemoryDbService {
  constructor() { }
  createDb() {
      let people: Person[] = [
        {
          name: "Owen",
          height: 62
        },
        {
          name: 'Bob',
          height: 55
        },
        {
          name: 'Jo',
          height: 60
        }
      ]
      return {people};
  }
}
