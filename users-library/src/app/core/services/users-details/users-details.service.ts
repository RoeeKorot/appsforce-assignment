import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {
  readonly url = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }
}
