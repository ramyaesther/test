import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';



@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id:number=0;

  customer:Customer=new Customer();



 constructor(private customerService:CustomerService,

   private router:Router,private route: ActivatedRoute) { }



 ngOnInit(): void {



   this.customer=new Customer();

 

     this.id = this.route.snapshot.params[`id`];

     

     this.customerService.getCustomerById(this.id).subscribe(data => {

       this.customer = data;

     }, error => console.log(error));



 }



 updateuser(){

   this.customerService.updateuser(this.id, this.customer).subscribe(data => {

     console.log(data);

     this.customer = new Customer();

     this.goToCustomerList();

   },error => console.log(error))

 }

 onSubmit(){

  this.updateuser();

 }

 

 

 goToCustomerList(){

   this.router.navigate([`/customerdetails`]);

  }

 

 }