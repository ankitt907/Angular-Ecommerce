import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from './crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient:HttpClient) { }

  adddata(postbody: any):Observable<Crud>{
    const baseUrl="http://localhost:3000/post";
    return this.httpClient.post<Crud>(baseUrl,postbody)
    
  }

  
  viewdata():Observable<Crud>{
    const baseUrl="http://localhost:3000/post";
    return this.httpClient.get<Crud>(baseUrl)
    
  }

  
  
  viewdatabyID(studentID:any):Observable<Crud>{
    const baseUrl="http://localhost:3000/post/"+studentID;
    return this.httpClient.get<Crud>(baseUrl)
    
  }

  updatedata(studentID:any,studentBody:any):Observable<Crud>{
    const baseUrl="http://localhost:3000/post/"+studentID;
    return this.httpClient.put<Crud>(baseUrl,studentBody)
    
  }

  
  deletedata(studentID:any){
    const baseUrl="http://localhost:3000/post/"+studentID;
    return this.httpClient.delete(baseUrl,studentID)
    
  }
  
  
}
