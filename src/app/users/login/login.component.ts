
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
  apiUrl : string = 'https://retoolapi.dev/pQclyz/pathEUsers';

  constructor(private apiService : ApiService, private routs : Router){

  }
  checkLogin() {
    var viswa:any=[];
    var rsj:any=""
    rsj=String(crypto.getRandomValues(new Uint32Array(1))[0])
    console.log(rsj)
    for(let i=0;i<6;i++){
      viswa[i]=rsj[i]
     
    }
        
    console.log(viswa);
    
    
    console.log(this.users);
    this.message = "";
    let url = this.apiUrl;
    if(this.email != "" && this.password != ""){
      url += "?email=" + this.email + "&pswd=" + this.password;
      this.apiService.getData(url).subscribe(
        (data : any) => {
          this.users = data;
          console.log(data);

          for(let user of this.users){
            if(user.email == this.email && user.pswd == this.password){
              this.message = "Email and Password Matched...";
              sessionStorage.setItem('email',user.email);
              this.redirectHome();
              break;
            }
          }
          if(this.message == ""){
            this.message = "Invalid Email or password";
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
    
}

