import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  

  constructor(private _httpService : HttpClient) { }

  httpGet(url : string) : Observable<any>
  {
    return this._httpService.get(url);
  }

  httpPost(url : string,obj : any) : Observable<any>
  {
    return this._httpService.post(url,obj);
  }

}
