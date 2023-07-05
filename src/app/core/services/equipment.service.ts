import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/equipment.model';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  constructor(private readonly http: HttpClient) {}
  getAll() {
    return this.http.get<Equipment[]>('/api/equipments');
  }

  getFilter(params: string) {
    return this.http.get<Equipment[]>(`/api/equipments?${params}`);
  }

  getDetail(id: string | number) {
    return this.http.get<Equipment>('/api/equipments/'+id);
  }
}
