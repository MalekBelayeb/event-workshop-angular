import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {

  dataSource:any = [
    {name:"Event 1",startDate:"03/03/2022",endDate:"07/03/2022"},
    {name:"Event 2",startDate:"12/04/2022",endDate:"15/04/2022"},
    {name:"Event 3",startDate:"16/05/2022",endDate:"17/05/2022"}
  ]                 

  constructor() { }

  ngOnInit(): void {
  }

}
