import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import '../../../assets/js/smtp.js'
declare let Email:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  
  email:String="";
  password:String="";
  name:String="";
  phone:String="";
  otp:String="";
  
  users : any[] = [];
  id: any;
otp1: String="";
  

  constructor(private apiService : ApiService,private router: Router){

  }
  registerUser(){
    if(this.email != "" && this.password != "" && this.name != "" && this.phone != ""){
      
      let user = {
        username : this.name,
        pswd : this.password,
        email : this.email,
        mobile : this.phone
      }
      var createotp:any=""
      createotp=String(crypto.getRandomValues(new Uint32Array(1))[0])
      console.log(createotp)
      for(let i=0;i<6;i++){
        this.otp+=createotp[i]
      }
      console.log(this.otp);
      console.log(this.email)
      this.apiService.createData("https://retoolapi.dev/8jwHfY/users",user).subscribe((responce)=>{
        console.log(responce)
        if(responce!=null){
          console.log(responce);
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

        
    
    
    }
  })
  

}
else{
  alert("Please Fill All The Fields")
  }
  }
  Verify(){
   
   
    console.log( this.otp1)
    console.log( this.otp)
    
  
   
      if(this.otp==this.otp ){
        alert("Signup Success")
        this.router.navigate(['/login'])
      

      }else{
        alert("Wrong Otp Please Try Again")
        
        this.apiService.getUsers().subscribe(
          (data : any) => {
            this.users = data;
            console.log(this.users);
          
     
            for(let user of this.users){
              if(user.email==this.email){
                this.id=user.id
                console.log(this.id)
     
              }
              
     
            }
            this.apiService.deleteuser(this.id).subscribe((responce)=>{
              console.log(responce);
              
            })
          }
         )
       
      }

     
        
    

  }
  login(){
    this.router.navigate(['login'])



  }







  

}
