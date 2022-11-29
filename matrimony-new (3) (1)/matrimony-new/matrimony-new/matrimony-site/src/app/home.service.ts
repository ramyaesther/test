import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Admin } from './admin';
import { TransferAmt } from './TransferAmt';
//  import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
  
})
export class HomeService {
  
  getCustomerById(id: number) {
    throw new Error('Method not implemented.');
  }
 
  getcustomerById(id: any) {
    throw new Error('Method not implemented.');
  }
  logInAdminuri:string="http://localhost:8080/api/v1/getadmin";
  customerdetailsuri:string="http://localhost:8080/api/v1/getcustomers";
  edituseruri:string="http://localhost:8080/api/v1/updatecustomers";
  registeruri:string="http://localhost:8080/api/v1/addcustomers";
  deleteuri:string="http://localhost:8080/api/v1/deletecustomers";
  BrideLoginuri:string="http://localhost:3000/logInPassenger";
  GroomLoginruri:string="http://localhost:3000/logInPassenger";
  searchbyiduri:string="http://localhost:3000/getFlightByRoute";
  getcustomeruri:string="http://localhost:8080/api/v1/getcustomerbyid";
  paymenturi:string="http://localhost:8080/api/v1/addpayments";
  contacturi:string="http://localhost:8080/api/v1/addpayments";




  

  constructor(private httpClient: HttpClient) { }
  public register(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.registeruri,customer);
  }
  public contact(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.contacturi,customer);
  }
  
  public customerlist (id:number):Observable<unknown>{

    const url = `${this.getcustomeruri}/${id}`;

    return this.httpClient.get(url);

  }
  public logInAdmin(id:number,userName:string,password:string):Observable<Admin>{
    const url = `${this.logInAdminuri}/${id}-${userName}-${password}`;
    return this.httpClient.get<Admin>(url);
  }
  public customerdetails():Observable<Customer[]>{
    const url = `${this.customerdetailsuri}`;
    return this.httpClient.get<Customer[]>(url);
  }
  
  edituser(id:number,customer:Customer): Observable<Object>{
    return this.httpClient.put(`${this.edituseruri}/${id}`,customer);
  }
  
 
  
 
  public deletecustomer(id:number):Observable<unknown>{
    const url = `${this.deleteuri}/${id}`;
    return this.httpClient.delete(url);
  }
  public Groomlogin(username:string,password:string):Observable<any>{
    const url = `${this.GroomLoginruri}/${username}-${password}`;
    return this.httpClient.get(url);
  }
 
  public Bridelogin(userName:string,password:string):Observable<any>{
    const url = `${this.BrideLoginuri}/${userName}-${password}`;
    return this.httpClient.get(url);
  }
  public searchcustomer(source:string,destination:string):Observable<Customer[]>{
    const url = `${this.searchbyiduri}s/${source}-${destination}`;
    return this.httpClient.get<Customer[]>(url);
  }
  public Save(transfer:TransferAmt):Observable<TransferAmt>{
    return this.httpClient.post<TransferAmt>(this.paymenturi,transfer);
  }
}
