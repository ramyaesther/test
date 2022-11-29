import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { HomeService } from '../home.service';

import { TransferAmt } from '../TransferAmt';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id:Number=0;
  name:String="";
    bankName:String="";
    accNo:Number=0;
    ifscCode:String="";
    amount:Number=0
    transfer:String[]=[];

transferObj=new TransferAmt();

transfers:Array<TransferAmt>=[];
    constructor(private router:Router,private homeService: HomeService) { }
    onPayment(myForm:NgForm){

      // alert('navigating to payment')
  
      console.log(myForm.value.id)
  
  
  
  
  
  console.log(myForm.value.name)  
  
  
  
  
  
  console.log(myForm.value.bankName)
  
  
  
  
  
  console.log(myForm.value.accNo)
  
  
  
     
  
  
  
  console.log(myForm.value.ifscCode)
  
  
  
  
  
  console.log(myForm.value.amount)
  
  
  if(myForm.invalid) {

    alert("navigating invalid")

    return;

  }



  this.homeService.Save(myForm.value).subscribe((res) =>{

    this.transferObj=res;

    console.log(res);

    this.transfers.push(this.transferObj);

    this.router.navigate(['payment'])

  });

 

}
  


  

handler:any = null;
ngOnInit() {

  this.loadStripe();
}

pay(amount: any) {    

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('payment successfull!!');
    }
  });

  handler.open({
    name: 'matrimony payment',
    description: 'payment process',
    amount: amount * 100
  });

}

loadStripe() {
   
  if(!window.document.getElementById('stripe-script')) {
    var s = window.document.createElement("script");
    s.id = "stripe-script";
    s.type = "text/javascript";
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = () => {
      this.handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Success!!');
        }
      });
    }
     
    window.document.body.appendChild(s);
  }
}

}
