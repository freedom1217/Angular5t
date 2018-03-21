import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework2-btn',
  templateUrl: './homework2-btn.component.html',
  styleUrls: ['./homework2-btn.component.css']
})
export class Homework2BtnComponent implements OnInit {
  @Input() btn_AddedNumber:number;
  @Input() btn_Additions:number;
  @Input() btn_EqualsIs:number;

  @Output() output_EqualsIs:EventEmitter<string> = new EventEmitter<string>();

  outData; //和
  go(){
    this.outData = Number(this.btn_AddedNumber)+Number(this.btn_Additions)
    console.log(this.outData);
    this.output_EqualsIs.emit(this.outData);//按傳回的時候output給父層 homework2
  }

  constructor() { }

  ngOnInit() {
  }

}
