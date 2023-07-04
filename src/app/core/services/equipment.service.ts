import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/equipment.model';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private readonly http: HttpClient) {}
  getAll() {
    return this.http.get('/api/equipments');
  }

  getFilter(params: string) {
    return this.http.get(`/api/equipments?${params}`);
  }

  getDetail(id: string | number) {
    return this.http.get('/api/equipments/'+id);
  }
}
