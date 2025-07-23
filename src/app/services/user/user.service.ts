import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected users = ['Jane', 'Doe'];

  getUsers() {
    return of(this.users);
  }

  addUser(user: string) {
    this.users.push(user);
  }
}
