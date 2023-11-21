import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private router : Router){
    console.log("Constructor is called....");
  }
  
  ngOnInit(): void {
    console.log("NgOnInit is called.....");
    this.checkSession();
  }


  checkSession(){
    if(sessionStorage.getItem('email') == null){
      this.router.navigate(['/login']);
    }
  }

  redirectToLogout(){
    this.router.navigate(['/logout']);
  }
}
