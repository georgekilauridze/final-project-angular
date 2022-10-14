import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-service',
  templateUrl: './api-service.component.html',
  styleUrls: ['./api-service.component.scss']
})
export class ApiServiceComponent implements OnInit {

  constructor(private service: ApiServiceService) { }
  serviceArray: any [] = []
  ngOnInit(): void {
    this.service.getAllInfo().subscribe((response: any)=>{
    this.serviceArray = response
    console.log(this.serviceArray);
      
    })
  }

}
