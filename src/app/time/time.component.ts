import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  // styleUrls: ['./time.component.scss'],
})

export class TimeComponent implements OnInit, OnDestroy {
  time!: Observable<string>
  subscribedTime!: string;
  timeSubscription!: any

  constructor() { }

  ngOnInit(): void {

      this.time = new Observable((observer)=>{
        setInterval(() => {observer.next(new Date().toString())}, 1000)
      });

      this.timeSubscription = this.time.subscribe( time => {
        this.subscribedTime = time
      });

  }
  ngOnDestroy(){
    this.timeSubscription.unsubscribe();
  }

};