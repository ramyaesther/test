import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userName:string="";

  emailid:string="";

  subject:string="";

 
contact:String[]=[];
contactObj=new Contact();
contacts:Array<Contact>=[];
  constructor(private router:Router,private homeService: HomeService) { }
  onContact(myForm:NgForm){
    this.homeService.contact(myForm.value).subscribe((res) =>{
      this.contactObj=res;
      console.log(res);
      this.contacts.push(this.contactObj);
     
      alert('Thank you for contacting will reach you soon')
    });
   alert('Thankyou for reaching out')
  }

  


  ngOnInit(): void {
  }

}
