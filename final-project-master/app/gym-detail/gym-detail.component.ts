import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { HttpClient } from '@angular/common/http';
import { TransferService } from '../transfer.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Params ,Router } from '@angular/router';
import { DataService } from '../data.service'
import * as $ from 'jquery';
import {trigger, state, animate, style, transition} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-gym-detail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.scss'],
  animations:[
      trigger('fadeOut', [
        state('normal',style({
          'opacity':1})),
          transition("void => *",[
          style({
            opacity:0
          }),
        animate(500)])
    ])]
})
export class GymDetailComponent implements OnInit {
  lat: any;
  lng: any ;
  currentRate = 8;
  logedUser:any;
  commentObject:any;
  requestedComments:any;
  commentsPath:string ="http://localhost:3000/comments";
  state="normal";
  gyms:{ id: number, name: "string"};
  tranferData:Array<object>;
  dataShowed:any;
  selectedComments:Array<any>;
  constructor(
    private transfer:TransferService,
    private serverData : ServerService ,
    private http:HttpClient,
    private route :ActivatedRoute ,
    private d : DataService) {

    this.getGymData();
    this.tranferData = [];
    this.dataShowed={};
    this.requestedComments=[];
    this.getRequestedComments();
    this.logedUser=this.transfer.getLogedUser();
    console.log(this.logedUser);
    this.commentObject={
      'id':'',
      'user':this.logedUser.username,
      'comment':''
    };
    this.lat=0;
    this.lng=0;
    this.selectedComments=[];

   }


   getRequestedComments():void{
     this.serverData.getData(this.commentsPath).subscribe(
       res =>{
         console.log(res);
         this.requestedComments = res;
         console.log('gymSelected id is',this.dataShowed.id);
         console.log('requestedComments',this.requestedComments)
         for(let item of this.requestedComments)
         {
           console.log(item);
           if(item.id === this.dataShowed.id)
           {
             console.log("EQUAL")
             this.selectedComments.push(item);
             console.log(this.selectedComments);
           }
         }
       },
       err =>{
         console.log(err);
       }
     );
   }

      // getRequestedComments():void{
      //   this.serverData.getData(this.commentsPath).subscribe(
      //     res =>{
      //       console.log(res);
      //       this.requestedComments=res;
      //     },
      //     err =>{
      //       console.log(err);
      //     }
      //   );
      // }

  ngOnInit() {
    // this.logedUser=this.transfer.getLogedUser();
    // console.log(this.logedUser);
  }

  addComment(comment){
      //POST
      console.log(this.commentObject.user)
      if(this.commentObject.user == null ){
      alert("Please login first")
    }
    else{
      this.commentObject.id = this.dataShowed.id;
      this.http.post(this.commentsPath,this.commentObject).subscribe((res)=>{
      console.log(res);
      console.log(this.requestedComments);
      this.http.get(this.commentsPath).subscribe(res => {
      this.requestedComments = res;
      })
    })
    }
  }
  // addComment(comment){
  //     //POST
  //     console.log(this.selectedComments)
  //     console.log(this.selectedComments[0].user);
  //     if(this.selectedComments[0].user == null ){
  //     alert("Please login first")
  //   }
  //   else{
  //     console.log(this.selectedComments[0].user);
  //     this.selectedComments[1].id = this.dataShowed.id;
  //     console.log(this.selectedComments[1].id);
  //     this.http.post(this.commentsPath,this.commentObject).subscribe((res)=>{
  //     console.log(res);
  //     console.log(this.selectedComments[1]);
  //     this.http.get(this.commentsPath).subscribe(res => {
  //     this.requestedComments = res;
  //     })
  //   })
  //   }
  // }




  getGymData():void{
    let path:string = 'http://localhost:3000/gymData';
    this.d.getgData(path).subscribe(
      res => { this.tranferData = res
        console.log(this.tranferData)

        this.gyms = {
          id :this.route.snapshot.params['id'],
          name: this.route.snapshot.params['name']
        }
        this.route.params.subscribe(
          (params:Params) => {
            this.gyms.id= +params['id'];
            this.gyms.name= params['name'];
          }
        )
        let i =0;
        for (i; i<this.tranferData.length;i++){
          if(this.gyms.id == this.tranferData[i]['id']){
              this.dataShowed = this.tranferData[i];
              console.log(this.dataShowed.phone);
              this.lat=this.dataShowed.lat;
              this.lng=this.dataShowed.long;
              console.log(this.lat);
              console.log(this.lng);
          }
        }
       console.log(this.dataShowed)
      },

      err => { console.log ("hi") },
      () => {}
    );
  }

  // imgArray:Array<object>=[
  //   {src:"../../assets/images/exercise-workout-gym-yoga.jpg"},
  //   {src:"../../assets/images/photo-1519505907962-0a6cb0167c73.jpg"},
  //   {src:"../../assets/images/danielle-cerullo-642332-unsplash.jpg"},
  //   {src:"../../assets/images/photo-1514994444123-10094655bdb5.jpg"}
  // ]

 changeImg($event) {
   const imgSrc:string = (event.target as HTMLInputElement).src;
     // console.log(imgSrc);
     $(".large-img").attr("src",imgSrc);
}

}
