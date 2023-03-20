import { Component, OnInit } from '@angular/core';
import { DateRange } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { Config } from 'src/app/config';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private httpClient:HttpClientService) { }

  event:any

  sampleRange: DateRange<Date> = new DateRange(new Date(),new Date());

  ngOnInit(): void {

    this.getEventById(this.activatedRoute.snapshot.params["id"])

  }


  getEventById(id:string)
  {

    this.httpClient.sendRequest(`${Config.getEventById}${id}`,{useToken:true}).subscribe({next:res=>{

      this.event = res.body.event

      this.sampleRange = new DateRange(new Date(this.event.startDate),new Date(this.event.endDate)) 

    },error:err=>{

      

    },complete:()=>{
      

    }})

  }

}
