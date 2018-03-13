import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}

export interface Account {
  account:String,//typescript，強型別
  password:string
  //如果是 account?:String
  //？為可有可無
}
