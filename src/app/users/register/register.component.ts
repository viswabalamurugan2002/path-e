import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

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
  
  users : any[] = [];

  constructor(private apiService : ApiService,private kevin: Router){

  }
  registerUser(){
    if(this.email != "" && this.password != "" && this.name != "" && this.phone != ""){
      let user = {
        userName : this.name,
        pswd : this.password,
        email : this.email,
        mobile : this.phone
      }
      this.apiService.createData("https://retoolapi.dev/pQclyz/pathEUsers",user).subscribe((responce)=>{
        console.log("response", responce);
        alert('Registered Successfully');
        this.kevin.navigate(['home'])
      
      });
    }
  }
  login(){
    this.kevin.navigate(['login'])



  }







  

}
