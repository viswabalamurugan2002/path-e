import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import '../../../assets/js/smtp.js'
declare let Email:any;
import { apiurl } from 'src/app/commen/apiurl.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  verifyotp: String="";
  email:String="";
  password:String="";
  confirmpassword:String="";
  name:String="";
  phone:String="";
  otp:String="";
  usero:any="";
  message:String=""
  
  users : any[] = [];
  id: any;

  

  constructor(private apiService : ApiService,private router: Router){

  }
  registerUser(){
    if(this.email != "" && this.password != "" && this.name != "" && this.phone != ""){
      var createotp:any=""
      createotp=String(crypto.getRandomValues(new Uint32Array(1))[0])
     
      for(let i=0;i<6;i++){
        this.otp+=createotp[i]
      }
    
      
      
     
        
      Email.send({
        SecureToken :'ca5ecfdb-9fb8-4902-b858-d05103f6629d',
        To :this.email,
        From : "viswabalamurugan2002@gmail.com",
        Subject : "This is the subject",
        Body : "Dear User We are Send Information From PATH-E And Your OTP is:"+this.otp
    }).then((message:any) => {
      if(message=="OK"){
        alert("OTP Sent Successfully Check Your Mail");
        var formElement = <HTMLFormElement>document.getElementById('otpdiv');
    formElement.style.display='block';
         
       
      }

    })
    let user = {
      username : this.name,
      pswd : this.password,
      email : this.email,
      mobile : this.phone
    }
    this.usero=user;
  }
  
 


    
}
  Verify(){
    var apiurl:any=apiurl;
   
   if(this.verifyotp==this.otp){
    this.apiService.createData(apiurl,this.usero).subscribe((response)=>{
      if(response!=null){
        alert("Registration Successful Login Now");
        this.router.navigate(['/login'])

      }
    })
   }
   else{
    alert("OTP Mismatch");
    }
   
   
   
    }
  login(){
    this.router.navigate(['login'])



  }
  cpass(){
    if(this.password==this.confirmpassword){
      let corpass=<HTMLFormElement>document.getElementById('pass');
      let corpassc=<HTMLFormElement>document.getElementById('passc');
      corpass.style.borderWidth='3px ';
      corpass.style.borderColor='green ';
      corpassc.style.borderWidth='3px ';
      corpassc.style.borderColor='green ';
    }
    else{
      let corpass=<HTMLFormElement>document.getElementById('pass');
      let corpassc=<HTMLFormElement>document.getElementById('passc');
      corpass.style.borderColor='red';
      corpass.style.borderWidth='3px ';
      corpassc.style.borderWidth='3px ';
      corpassc.style.borderColor='red ';

      
    }
    if(this.password==""){
      let corpass=<HTMLFormElement>document.getElementById('pass');
      let corpassc=<HTMLFormElement>document.getElementById('passc');
      corpass.style.borderColor='red';
      corpass.style.borderWidth='3px ';
      corpassc.style.borderWidth='3px ';
      corpassc.style.borderColor='red ';

    }
  }







  

}

