import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './../my-service.service';
@Component({
  selector: 'app-newcmp',
  templateUrl: './newcmp.component.html',
  styleUrls: ['./newcmp.component.css']
})
export class NewcmpComponent implements OnInit {
  todaydate:Date;
  newcomponentproperty;
  newcomponent = "Entered in newcomponent";
 
  constructor(private myservice:MyServiceService) { }

  ngOnInit():void {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
  }

}