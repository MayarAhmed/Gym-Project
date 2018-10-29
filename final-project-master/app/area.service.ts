import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  area: string

  constructor(private http: HttpClient) {
    this.area = "all";

  }

  getData(path: string): Observable<any> {
    return this.http.get(path)

  }
}
