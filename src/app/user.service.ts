import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
    { id: 3, name: 'Charlie', email: 'charlie@email.com' }
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
}
