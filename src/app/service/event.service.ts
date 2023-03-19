import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient:HttpClient) { }

  getAllEvents(data:any)
  {
    return this.httpClient.post(`${environment.url}/api/v1/user/login`,data,{})
  }

  

}
