import { Injectable } from '@angular/core';
import { Tour } from './tour';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http:HttpClient) {}

  baseUrl="http://localhost:8080/tour"

  
  
  postDetails(t:Tour):Observable<Tour>{
    return this.http.post<Tour>(`${this.baseUrl}/add`,t);
  }
  getbyid(id:number):Observable<Tour>{Tour
    return this.http.get<Tour>(`${this.baseUrl}/find/${id}`);
  }
  updatebyid(id:number,p:Tour):Observable<Tour>{
    return this.http.put<Tour>(`${this.baseUrl}/update/${id}`,p);
  }
  
  
}
