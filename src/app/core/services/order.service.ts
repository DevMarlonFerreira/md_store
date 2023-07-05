import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, CartFinished } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly http: HttpClient) { }

  execute(data: CartFinished) {
    return this.http.post<Cart>('/api/orders', data);
  }
}
