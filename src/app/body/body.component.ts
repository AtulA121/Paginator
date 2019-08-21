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

  async ngOnInit() {

    // console.log("result is : "+await this.doTask());
    // console.log("result2 is : "+await this.doTask2());
    // this.doTask3();

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

  // doTask3(){

  //   function Person(name) {
  //     this.name = name;
  //     }
  //     Person.prototype.intro = function () {
      
  //     console.log("Hello I am " + this.name);
  //     }
  //     var person = new Person("John");
  //     console.log("---------------- : ",person.intro());
      
  // }

  // doTask2(){
  //   let char="Zulwh ​d ​surjudp ​(lq ​Sbwkrq, ​MdydVfulsw ​ru ​Uxeb) ​wr ​srsxodwh ​dqg ​wkhq ​vruw ​dudqgrpob ​glvwulexwhg ​olvw ​ri ​1 ​ploolrq ​lqwhjhuv, ​hdfk ​lqwhjhu ​kdylqj ​d ​ydoxh ​>= ​1 ​dqg ​<=100 ​zlwkrxw ​xvlqj ​dqb ​exlowlq/hawhuqdo ​oleudub/ixqfwlrq ​iru ​vruwlqj.Brxu ​surjudp ​vkrxog ​fduhixoob ​frqvlghu ​wkh ​lqsxw ​dqg ​frph ​xs ​zlwk ​wkh ​prvw ​hiilflhqwvruwlqj ​vroxwlrq ​brx ​fdq ​wklqn ​ri. ​Surylgh ​wkh ​vsdfh ​dqg ​wlph ​frpsohalwb ​ri ​brxu ​dojrulwkp";

  //   let arr2="";
    
  //   for(let i=0;i<char.length;i++){

  //     if(char.charCodeAt(i)>90 && char.charCodeAt(i)<=122)
  //     {
  //       if(char.charCodeAt(i)+3>122)
  //       {
  //         arr2+=String.fromCharCode(96+(char.charCodeAt(i)+3)-122);
  //       }
  //       else
  //       {
  //         arr2+=String.fromCharCode(char.charCodeAt(i)+3);
  //       }
  //     }
  //     else if(char.charCodeAt(i)<=90 && char.charCodeAt(i)>=65)
  //     {
  //       if(char.charCodeAt(i)+3>90)
  //       {
  //         arr2+=String.fromCharCode((64+(char.charCodeAt(i)+3)-90));
  //       }
  //       else
  //       {
  //         arr2+=String.fromCharCode(char.charCodeAt(i)+3);
  //       }
  //     }
  //     else
  //     {
  //       arr2+=char.charAt(i);
  //     }
  //   }

  //   return arr2;
  // }

  // doTask()
  // {
  //   let array=[1,2,3,4,5,6];
  //   let n=10;
  //   let temp=array.length-n;
  //   let arr : any =[];
    
  //   for(let i=temp;i<array.length;i++)
  //   {
  //     console.log(array[i]," , ");
  //     arr.push(array[i]);
  //   }

  //   let j=0;
  //   for(;j<temp;j++)
  //   {
  //     console.log(array[j]," , ");
  //     arr.push(array[j]);
  //   }
  //   return arr;
  // }

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
