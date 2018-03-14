import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {
  t1:testDic = {
    name:'',
    score:''
  }

  tAll:testDic[] = []

  save(){
    console.log(this.t1);

    let _dic:testDic = Object.assign({}, this.t1);
    this.tAll.push(_dic);

    console.log(this.tAll);
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface testDic{
  name:string,
  score:string

}