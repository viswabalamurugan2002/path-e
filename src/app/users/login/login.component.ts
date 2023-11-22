
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: String = '';
  password: String = '';
  message: String = '';
  users : any[] = [];
  apiUrl : string = 'https://retoolapi.dev/8jwHfY/users';
  

  constructor(private apiService : ApiService, private routs : Router){

  }
  login() { 
   
    this.message = "";
    let url = this.apiUrl;
    if(this.email != "" && this.password != ""){
      url += "?email=" + this.email + "&pswd=" + this.password;
      this.apiService.getData(url).subscribe(
        (data : any) => {
          this.users = data;
        
          

          for(let user of this.users){
            if(user.email == this.email && user.pswd == this.password){
              alert("loginSuccess")
              sessionStorage.setItem('email',user.email);
              this.routs.navigate(['/home'])
             
            }
           
            }
            if(this.users.length==0){
              alert("Invalid username password")
              
            }

          }
         
      );
      
    }else{
      this.message = "Values Kodu thala...";
    }
  }
  redirectHome(){
    this.routs.navigate(['/home']);
  }
  newuser(){
    this.routs.navigate([''])
  }
    
}

