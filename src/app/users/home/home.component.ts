import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { apiurl } from 'src/app/commen/apiurl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {//implements OnInit
  users : any[] = [];
  apiUrl : string = apiurl ;

  constructor(private router : Router,private apiSevice:ApiService){
    console.log("Constructor is called....");
  }
  
  ngOnInit(): void {
    console.log("NgOnInit is called.....");
    this.checkSession();
  }


  checkSession(){
    let url = this.apiUrl;
      url += "?email=" + sessionStorage.getItem('email')
      this.apiSevice.getData(url).subscribe(
        (data : any) => {
          this.users = data;
        
          

          for(let user of this.users){
            if(user.email != sessionStorage.getItem('email') ){
              this.router.navigate(['/login'])
              
            
             
             
            }
            
           
            }


    
  })
  if(sessionStorage.getItem('email')==null){
    this.router.navigate(['/login'])
  }
  if(this.users.length==0){
    this.router.navigate(['/login'])
  }
}

 
}
