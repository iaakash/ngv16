import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-req-input',
  templateUrl: './req-input.component.html',
  styleUrls: ['./req-input.component.scss'],
})
export class ReqInputComponent {
  @Input({ required: true }) options!: Array<string>; //required
}

//@Input({transform: (value: boolean | string) => value !== null && `${value} !== false` }) isVisible: boolean = false; // incoming



// we can also extract this transaform function to make it reusable - e.g currency prefixer, stringToBoolean, staticDynamicProperty conversion

// This can be used as:
// <app-req-input isVisible></app-req-input> 
// <app-req-input isVisible="true"></app-req-input>   
// <app-req-input [isVisible]="true"></app-req-input>  