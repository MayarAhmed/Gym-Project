
import { Component, OnInit} from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/animations';
import { AreaService } from '../area.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.scss'],
})
export class GymsComponent implements OnInit {

  selectedArea:string;
  gymjson;
  gymItems =[];
  // spa;
   constructor(
     http:HttpClient
) {
  http.get('http://localhost:3000/gymData').subscribe(res=>{
    this.gymjson = res;
    console.log(res)
      this.gymItems = this.gymjson;
  })
    }
    //GYM FILTERS function
    // *******************

    filters(spa,sauna,steam,jacuzzi,massage,male,female,mix){
      this.gymItems = [];
      // SPA FILTER
      if(spa){
        this.gymjson.forEach(item=>{
          if(item.spa){
            this.gymItems.push(item);
          }
        });
      }
      // POOL FILTER
      if(sauna){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.sauna){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.sauna){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(steam){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.steam){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.steam){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(jacuzzi){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.jacuzzi){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.jacuzzi){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(massage){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.massage){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.massage){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(male){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.male){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.male){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(female){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.female){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.female){
              this.gymItems.push(item);
            }
          });
        }
      }
      if(mix){
        if(this.gymItems.length > 0){
          this.gymItems.forEach((item,index)=>{
            if(!item.mix){
              this.gymItems.splice(index,1);
            }
          });
        }
        else{
          this.gymjson.forEach(item=>{
            if(item.mix){
              this.gymItems.push(item);
            }
          });
        }
      }
      console.log(this.gymItems)
      if(!spa && !sauna && !steam && !jacuzzi && !massage && !male && !female && !mix){
        this.gymItems = this.gymjson;
      }
    }
      //******************************************//

  backData:Array<object>;

     dataBack(){
       console.log(this.backData);
     }

  ngOnInit() {
  }

}
