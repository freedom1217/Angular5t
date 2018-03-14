import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {

  @Input() buttontag:string = "This is simple button";
  @Output() onClick:EventEmitter<any> = new EventEmitter<any>();

  go(){
    this.onClick.emit();
  }


  constructor() { }

  ngOnInit() {
  }

}
