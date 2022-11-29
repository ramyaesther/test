import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';

import { Admin } from './admin';



@Injectable({

  providedIn: 'root'

})

export class AdminService {



  private logInAdminuri="http://localhost:8080/api/v1/getadmin";



  constructor(private httpClient:HttpClient) { }
 
  public getAdminList(id:number,userName:string,password:string):Observable<Admin>{
    const url = `${this.logInAdminuri}/${id}-${userName}-${password}`;
    return this.httpClient.get<Admin>(url);
  }
 }

 

 