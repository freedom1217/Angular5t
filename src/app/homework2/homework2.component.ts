import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {
  addNumber //被加數
  additions //加數
  equalsIs //和

  putOutputEqualsIs($event:MouseEvent){
    console.log($event);
    console.log('in');
    this.equalsIs = $event;
  }

  constructor() { }

  ngOnInit() {
  }

}
