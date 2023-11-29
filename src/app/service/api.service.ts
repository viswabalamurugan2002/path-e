import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiurl } from '../commen/apiurl';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  a:any=""

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(apiurl);
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
    return this.http.post(apiurl, user);
  }
  deleteuser(id:any){
    
    return this.http.delete(apiurl+"/"+id)
  }
}
