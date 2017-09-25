import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
counter:number;
  constructor() {this.counter=1; }

  ngOnInit() {
  }
increment(){
  this.counter++;
}
decrement(){
  this.counter--;
}
}