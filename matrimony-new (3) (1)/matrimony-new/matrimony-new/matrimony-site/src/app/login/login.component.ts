import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer:Customer[]=[];

  cus:Customer=new Customer();

  c:number=0;

  customerId:number=0;



  constructor(private customerService : CustomerService,

    private router: Router) { }



  ngOnInit(): void {

  }



  customerLogin(){

    this.customerService.getCustomerList().subscribe(data=>{

      this.customer=data;

         this.customer.filter(d => {

       if( d.emailId==this.cus.emailId && d.password==this.cus.password){

        alert("Login Successfull");

        this.c++;

        this.msg();

       }

      });

     

       if(this.c==0)

       alert("Invalid userId or password");

     

      } );

         



  }



  msg(){

   

    this.router.navigate(["/customerlist"]);

  }



  onSubmit(){

    this.customerLogin();

  }



  register(){

    this.router.navigate(["/register"])

  }

}
