import { Injectable } from '@angular/core';

@Injectable()//辨識service的字
export class BmiService {
  pub_temp1:number = 2//lesson1, 2用
  constructor() { }

  calBMI(h:number,w:number):number{//service寫明確
    let bmi:number = 0.0;
    bmi = w/Math.pow((h/100),2);
    return bmi;
  }
}
