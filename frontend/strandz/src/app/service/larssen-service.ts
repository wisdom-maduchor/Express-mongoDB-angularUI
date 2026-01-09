import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LarssenService {

  private APIURL = 'http://localhost:4000/items';

  private http = inject(HttpClient);

  getItem(): Observable<any[]>{
    return this.http.get<any[]>(this.APIURL);
  };

  postItem(userData: any): Observable<any>{
    return this.http.post(this.APIURL, userData);
  };

  PutItem(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.APIURL}/${id}`, userData);
  };
  
  deleteItem(id: string): Observable<any>{
    return this.http.delete(`${this.APIURL}/${id}`);
  };
};
