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


      // .then((data: any) => data))
      // .subscribe((result) => {
      //   result as string;
      // });
    // .get<{ tags: Equipment[] }>("https://mandalorian-store.netlify.app/api/equipments")
    // .pipe(map((data) => data));
  // }

  getAll(){
    return this.http
      .get("/api/equipments")
      // .get<{ tags: Equipment[] }>("https://mandalorian-store.netlify.app/api/equipments")
      // .pipe(map((data) => data.tags));
  }
}
