import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';//新版用法

@Injectable()
export class HttpService {
  server = 'http://localhost:3000/' //設定後端port位址
  constructor(private _http: HttpClient) { }

  /*Restful api： get； post； put ； del [ /api/ version/ table name ] */

  getData(url: string){//查
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.server + url, {headers:headers})
  }

  postData(url: string, bodyData:any){//增
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.post(this.server + url, bodyData, {headers:headers});
  }

  putData(){//改

  }

  deleteData(){//刪

  }

}
