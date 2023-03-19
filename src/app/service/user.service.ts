import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  login(data:any){
    
    return this.httpClient.post(`${environment.url}/api/v1/user/login`,data,{})

  }

  regitster(data:any){

    return this.httpClient.post(`${environment.url}/api/v1/user/signup`,data,{})
    
  }
  
}
