import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  getUrl : string="http://localhost:8080/getEmployeeData";
  getCountUrl : string="http://localhost:8080/getEmployeeDataCount";
  postUrl : string="http://localhost:8080/postEmployeeData";

  arr : any;

  totalCount : any=0;
  pagerSizeIs : any=5;

  constructor(private _httpService : HttpServiceService) { }

  ngOnInit() {

    this._httpService.httpGet(this.getCountUrl).subscribe(res=>{
      console.log("response : get : ",res.status);
      this.totalCount=res.data;
      this.getSelectedRecords(this.totalCount,this.pagerSizeIs,(data)=>{
        console.log("--- : ",data);
      });
    },err=>{
      console.log("error : ",err);
    });
  }
 
  getSelectedRecords(count : any,perPage : any,callback) {
    let obj : any ={
      // startPage : Math.floor(perPage/count)-1,
      startPage : 0,
      pageSize : perPage
    }

    this._httpService.httpPost(this.postUrl,obj).subscribe(res=>{
      this.arr=res;
      console.log("response : post :",res);
      callback(res);
    },err=>{
      console.log("error : ",err);
    });

  }

  valueChangedIs() {
    this.getSelectedRecords(this.totalCount,this.pagerSizeIs,(data)=>{
      console.log("--- : ",data);
    });
  }

}
