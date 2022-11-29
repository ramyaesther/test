import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

import { Customer } from '../customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  id:number=0;
  firstName:string="";

  lastName:string="";

  emailId:string="";

  phoneNo:Number=0;

  caste:string="";

  religion:string="";

  education:string="";

  language:string="";

  location:string="";

  gender:string="";

  height:Number=0;

  weight:Number=0;

  profession:string="";

  country:string="";

  plans:string="";

  maritalStatus:string="";

  password:string="";
customer:String[]=[];
customerObj=new Customer();
customers:Array<Customer>=[];
  

  constructor(private router:Router,private homeService: HomeService) { }

  onRegister(myForm:NgForm){
    
    console.log(myForm.value.first_name)



console.log(myForm.value.last_name)  



console.log(myForm.value.email_id)



console.log(myForm.value.phone_no)

   

console.log(myForm.value.caste)



console.log(myForm.value.religion)



console.log(myForm.value.education)

 

console.log(myForm.value.language)



console.log(myForm.value.location)



console.log(myForm.value.gender)



console.log(myForm.value.height)



console.log(myForm.value.weight)



console.log(myForm.value.profession)



console.log(myForm.value.country)



console.log(myForm.value.plans)



console.log(myForm.value.marital_status)



console.log(myForm.value.password)
    if(myForm.invalid) {
      alert("navigating invalid")
      return;
    }

    this.homeService.register(myForm.value).subscribe((res) =>{
      this.customerObj=res;
      console.log(res);
      this.customers.push(this.customerObj);
      this.router.navigate(['payment'])
      alert('navigating to payment')
    });
    
  }

  signIn(){
    this.router.navigate(['user-login'])
}


  ngOnInit(): void {
  }

}
