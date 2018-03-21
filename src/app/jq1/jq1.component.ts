import { Component, OnInit } from '@angular/core';

declare var $:any; //如果types加成功則不用寫這個

@Component({
  selector: 'app-jq1',
  templateUrl: './jq1.component.html',
  styleUrls: ['./jq1.component.css']
})
export class Jq1Component implements OnInit {

  constructor() { }

  ngOnInit() {//用jQuery在這
    $(()=>{
      console.log('jquery start');
      
    })
  }

}
