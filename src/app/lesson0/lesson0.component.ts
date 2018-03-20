import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson0',
  templateUrl: './lesson0.component.html',
  styleUrls: ['./lesson0.component.css']
})
export class Lesson0Component implements OnInit {
  name = 'LuxProtoss';
  url = 'https://www.google.com';

  now = new Date();

  aaa:Account = {//引用interface
    account:  'lux',
    password: 'abc123'
  }

  zzz(){
    console.log('123132');
  }


  constructor() { }

  ngOnInit() {
  }

}

export interface Account {
  account:String,//typescript，強型別
  password:string
  //如果是 account?:String
  //？為可有可無
}
