import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

customers:Customer[]=[];
constructor(private customerService:CustomerService,
private router:Router ){ }

ngOnInit(): void {
 this.getCustomers();
}
 private getCustomers(){
 this.customerService.getCustomerList().subscribe(data =>{
 this.customers=data;
 });
}

viewCustomer(customerId:number){
this.router.navigate([`view-customer`,customerId]);
}

updateuser(id:number){
this.router.navigate([`updateuser`]);
}

deleteCustomer(id:number){
this.customerService.deleteCustomer(id).subscribe(data => {
console.log(data);
this.getCustomers();
})
}

}

