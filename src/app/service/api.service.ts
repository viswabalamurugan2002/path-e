import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  a:any=""

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get('https://retoolapi.dev/pQclyz/pathEUsers');
  }

  getData(url: string){
    return this.http.get(url);
  }

  createData(url: string, data: any){
    return this.http.post(url, data);
  }

  updateData(url: string, data: any){
    return this.http.put(url, data);
  }

  deleteData(url: string, user: any){
    return this.http.delete(url);
  }

  insertUser(user : any){
    return this.http.post('https://retoolapi.dev/pQclyz/pathEUsers', user);
  }
  deleteuser(id:any){
    
    return this.http.delete('https://retoolapi.dev/pQclyz/pathEUsers/'+id)
  }
}
