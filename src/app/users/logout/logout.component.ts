import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  email:any=""
  users:any=[]
  id:any=""
  constructor(private apiservice:ApiService){

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
