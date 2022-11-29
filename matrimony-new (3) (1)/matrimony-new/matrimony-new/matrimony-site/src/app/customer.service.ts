import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Customer } from './customer';



@Injectable({

  providedIn: 'root'

})

export class CustomerService {
  private baseUrl="http://localhost:8080/api/v1/getallcustomers"

  private createCustomerUrl="http://localhost:8080/api/v1/addcustomer";

  private updateuserUrl="http://localhost:8080/api/v1/updatecustomer";

  private getCustomerByIdUrl="http://localhost:8080/api/v1/getcustomer";

  private deleteCustomerByIdUrl="http://localhost:8080/api/v1/deletecustomer";

 

  constructor(private httpClient:HttpClient) { }
  getCustomerList():Observable<Customer[]>{

    return this.httpClient.get<Customer[]>(`${this.baseUrl}`);

  }

  

  createCustomer(customer : Customer): Observable<Object>{

    return this.httpClient.post(`${this.createCustomerUrl}`,customer);

}



 getCustomerById(id:number): Observable<Customer>{

  return this.httpClient.get<Customer>(`${this.getCustomerByIdUrl}/${id}`);

}



updateuser(id:number,customer: Customer): Observable<Object>{

  return this.httpClient.put(`${this.updateuserUrl}/${id}`,customer);

}



deleteCustomer(customerId:number): Observable<Object>{

  return this.httpClient.delete(`${this.deleteCustomerByIdUrl}/${customerId}`);

}




}