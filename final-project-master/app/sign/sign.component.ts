import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { HttpClient } from '@angular/common/http';
import { NgForm ,NgModel }      from '@angular/forms';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  requestedData:Array<object>;
  userPath:string ="http://localhost:3000/users";
  username:any = {
    'username':'',
    'email':'',
    'password':'',
    'address':'',
    'phone':''
  };
  constructor(private serverData : ServerService , private http:HttpClient ) {
    this.requestedData=[];
    this.getRequestedData();
   }

   getRequestedData():void{
     this.serverData.getData(this.userPath).subscribe(
       res =>{
         console.log(res);
         this.requestedData=res;
       },
       err =>{
         console.log(err);
       }
     );
   }
   addUser(user){
       //POST
       this.http.post(this.userPath,this.username).subscribe((res)=>{
       console.log(res);
       console.log(this.requestedData);
       })
   }

  register(data:NgForm): void {
    console.log(data);
  }

  ngOnInit() {
  }

}
