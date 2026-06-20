import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  getUsuariosApi() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}