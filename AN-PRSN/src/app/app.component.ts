import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  template: '<app-system></app-system>',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = 'Person';
  myForm: any;
   ngOnInit() {
    } 
}