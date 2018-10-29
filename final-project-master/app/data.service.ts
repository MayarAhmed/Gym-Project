import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  path:string
  constructor(
    private http : HttpClient
  ) { }

  getgData(path:string):Observable<any> {
    return this.http.get(path)
  }
}




