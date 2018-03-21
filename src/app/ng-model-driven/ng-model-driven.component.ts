import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-ng-model-driven',
  templateUrl: './ng-model-driven.component.html',
  styleUrls: ['./ng-model-driven.component.css']
})
export class NgModelDrivenComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  //方法一
  userForm = new FormGroup({
    name:new FormControl('Lux',Validators.required),//塞預設值,加驗證：不得空白
    email:new FormControl(null,[Validators.required, Validators.minLength(4)]),//最小長度
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl(),
      postalcode:new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))//自訂驗證
    })
  });

  //方法二
  // userForm:FormGroup
   ngOnInit() {
    
  //   this.userForm = this._formBuilder.group({
  //     name:['Lux',Validators.required],
  //     email:[],
  //     address:this._formBuilder.group({
  //       street:[],
  //       city:[],
  //       postalcode:[]

  //     })
  //   })
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

}
