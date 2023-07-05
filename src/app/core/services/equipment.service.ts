import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
