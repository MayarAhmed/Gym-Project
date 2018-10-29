
import {Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { ServerService } from '../server.service';
import { HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';
import {trigger, state, animate, style, transition} from '@angular/animations';
import 'rxjs/operator/filter';
import { AreaService } from '../area.service';
import { TransferService } from '../transfer.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show <=> hide', animate('700ms ease-out')),

    ]),
    trigger('rotate', [
      transition('void => *', style({
        transform: "rotateY(90deg)"
      })),
    ])
  ]
})

export class HomeComponent implements OnInit {
  requestedData:Array<any>;
  gymData:Array<any>
  userPath:string ="http://localhost:3000/users";
  gymPath:string ="http://localhost:3000/gymData";
  state = 'hide';
  // username:Array<any> = [{
  //   'username':'',
  //   'email':'',
  //   'password':'',
  // }];
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }
  constructor(
  private serverData : ServerService ,
  private http:HttpClient ,
  private a:AreaService ,
  private transfer:TransferService ,
  public el: ElementRef ) {

    this.requestedData=[];
    this.getRequestedData();
    this.gymData=[];
    this.getGymData();
   }

  getRequestedData():void{
    this.serverData.getData(this.userPath).subscribe(
      res =>{
        console.log(res);
        this.requestedData=res;
        this.transfer.setUrlHistoryObj(this.requestedData);
      },
      err =>{
        console.log(err);
      }
    );
  }
  getGymData():void{
    this.serverData.getGym(this.gymPath).subscribe(
      res =>{
        console.log(res);
        this.gymData=res;

      },
      err =>{
        console.log(err);
      }
    );
  }
  // addUser(user){
  //     //POST
  //     this.http.post(this.userPath,this.username).subscribe((res)=>{
  //     console.log(res);
  //     console.log(this.requestedData);
  //     //GET
  //     this.http.get(this.userPath).subscribe(res => {
  //     this.requestedData = res;
  //     })
  //   })
  // }
// =======
    get area():string {
       return this.a.area;
     }

  //function to get selected area
 //   selectChange($event){
 //    this.selectedArea=(event.target as HTMLInputElement).value;
 //    this.a.area=this.selectedArea;
 // }

  ngOnInit() {

  // login(loginForm){
  //     //POST
  //     this.http.post(this.userPath,this.username).subscribe((res)=>{
  //     console.log(res);
  //     console.log(this.requestedData);
  //     for(let i=0;i<=this.requestedData.length;i++){
  //         console.log(this.requestedData[i].email)
  //     }
  //     //GET
  //     this.http.get(this.userPath).subscribe(res => {
  //     this.requestedData = res;
  //     })
  //   })
  // }
}
}
