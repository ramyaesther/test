import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  constructor(private router:Router,private customerService: CustomerService) { }
  AddCustomer(){
    this.router.navigate(['register'])

}
CustomerDetails(){
  this.router.navigate(['customerdetails'])
}
  ngOnInit(): void {
  }

}

