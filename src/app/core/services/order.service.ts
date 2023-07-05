import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly http: HttpClient) { }

  execute(data: {}) {
    return this.http.post('/api/orders', data);
  }
}
