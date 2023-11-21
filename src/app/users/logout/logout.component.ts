import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{
  email:any=""
  users:any=[]
  id:any=""
  constructor(private apiservice:ApiService, private router: Router){

  }

  ngOnInit(): void {
    this.removeSession();
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  removeSession(){
    sessionStorage.removeItem('email');
  }


  logout(){
    this.apiservice.getUsers().subscribe(
     (data : any) => {
       this.users = data;
       console.log(this.users);
     

       for(let user of this.users){
         if(user.email==this.email){
           this.id=user.id
           console.log(this.id)

         }
         

       }
       this.apiservice.deleteuser(this.id).subscribe((responce)=>{
         console.log(responce);
         
       })
     }
    )
}

}
