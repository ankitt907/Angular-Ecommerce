import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from './pagination';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private httpClient:HttpClient) { }

  viewEmployee():Observable<Pagination>{
    const baseUrl="http://localhost:3000/employee/";
    return this.httpClient.get<Pagination>(baseUrl)
    
  }

}
