import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

//   admin:Admin[]=[];

//   adm:Admin=new Admin();

//   c:number=0;

//   adminId:number=0;



//   constructor(private adminService : AdminService,

//     private router: Router) { }



//   ngOnInit(): void {

//   }



//   AdminLogin(){

//    this.adminService.getAdminList().subscribe(data=>{

//       this.admin=data;

//          this.admin.filter(d => {

//        if( d.userName==this.adm.userName && d.password==this.adm.password){

//         alert("Login Successfull");

//         this.c++;

//         this.msg();

//        }

//       });

     

//        if(this.c==0)

//        alert("Invalid userId or password");

     

//       } );

         



//   }



//   msg(){

   

//     this.router.navigate(["/adminlist"]);

//   }



//   onSubmit(){

//     this.AdminLogin();

//   }

// }
isLoggedIn:boolean=false;

  constructor(private router:Router,private AdminService: AdminService) { }

  onSignUp(myForm:NgForm){
    alert('navigating to bride groom details')
    console.log(myForm.value.id)
    console.log(myForm.value.userName)
    console.log(myForm.value.password)
    

    if(myForm.invalid) {
      alert("navigating invalid")
      return;

    }
    // this.homeService.logInAdmin(myForm.value.id,myForm.value.userName,myForm.value.password).subscribe((res) =>{
    //   this.isLoggedIn=true;
    //   console.warn(res)
    //   alert("Logged In successfully")
      this.router.navigate(['adminlist'])

    // });
    
    
  }

  ngOnInit(): void {
  }

}