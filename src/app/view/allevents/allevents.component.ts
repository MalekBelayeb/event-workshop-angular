import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { HttpClientService, HttpMethod } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {

  constructor(private httpClient:HttpClientService) { }

  isLoading:boolean = false 

  dataSource:any = []                 

  ngOnInit(): void {
    this.getAllEvents()
  }

  getAllEvents()
  {

    this.isLoading = true 
  
    this.httpClient.sendRequest(Config.getEventstUrl,{method:HttpMethod.GET,useToken:true}).subscribe({next:(response)=>{

      console.log(response.body.events)

      this.dataSource = response.body.events.map((item:any)=>{

        var event:any = {}
        event.cover = `${Config.imageFolder}/${item.cover}`
        event.name = item.title
        event.organizer = `${item.organizer.firstname} ${item.organizer.lastname}`
        event.startDate = item.startDate
        event.endDate = item.endDate
        return event
      })
  
  
    },error:err=>{

    this.isLoading = false  

  },complete:()=>{

    this.isLoading = false  

  }})

  }
  
}
