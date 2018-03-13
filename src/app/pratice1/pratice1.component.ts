import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice1',
  templateUrl: './pratice1.component.html',
  styleUrls: ['./pratice1.component.css']
})
export class Pratice1Component implements OnInit {
  
  zzz:EnglishDic = {
    English:'',
    Chinese:''
  }

  ppp:EnglishDic[] = []

  save(){
    console.log(this.zzz);//console查看值

    //把值塞到Dic
    let _dic:EnglishDic = Object.assign({}, this.zzz);//先複製位址內容

    this.ppp.push(_dic);//塞過去

    console.log(this.ppp);
  }

  filter:EnglishDic[]=[]

  constructor() { }

  ngOnInit() {
  }

}

export interface EnglishDic{
  English:string,
  Chinese:string

}