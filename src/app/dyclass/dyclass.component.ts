import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dyclass',
  templateUrl: './dyclass.component.html',
  styleUrls: ['./dyclass.component.css']
})
export class DyclassComponent implements OnInit {
  @ViewChild('pc')pc:ElementRef;
  
  number:any;
  number2:any;

  addc(){
    this.pc.nativeElement.classList.add('rdd');
  }
  addG(){
    this.pc.nativeElement.classList.add('g');
  }
  addY(){
    this.pc.nativeElement.classList.add('y');
  }
  rmc(){
    this.pc.nativeElement.classList.remove('rdd');
  }

  constructor(private route: ActivatedRoute) { } //接網址參數

  ngOnInit() {
    //方法1
    //this.number = Number(this.route.snapshot.params.number);//要跟route一樣
    //this.number2= Number(this.route.snapshot.params.number2);
    //方法2
    this.number = +this.route.snapshot.params.number;
    this.number2= +this.route.snapshot.params.number2;
  }

}
