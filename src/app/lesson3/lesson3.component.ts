import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})
export class Lesson3Component implements OnInit {
weekday: string[] = ["1", "2", "3", "4", "5"] //陣列

user:Object[]=[ //物件
  {"name":"Lux", "address":"taipei"},
  {"name":"bbb", "address":"dddd"}
]

printInt: string[] = ["10", "20", "30", "40", "50"]

//printInt



  constructor() { }

  ngOnInit() {
  }

}
