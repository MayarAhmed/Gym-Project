import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  getData(path:string) : Observable<any>{
    return this.http.get(path);
  }
  getGym(gymPath:string) : Observable<any>{
    return this.http.get(gymPath);
  }
}
