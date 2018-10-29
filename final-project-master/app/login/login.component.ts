import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm ,NgModel } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  transferedData :Array<any>;
  x :any;
  loginUser:any;
  constructor(private transfer:TransferService , private router:Router,
  private currentRoute : ActivatedRoute) {
    this.transferedData=this.transfer.getUrlHistoryObj();
    console.log(this.transferedData);
    this.loginUser={};
    this.x={};
  }

  check(emailAddress){
    console.log(emailAddress);
    for(let i=0 ; i<=this.transferedData.length;i++)
    {
      this.x=this.transferedData[i];
      if(this.x.email == emailAddress)
      {
        console.log(this.x.email)
        console.log("FOUNDDDDD");
        this.router.navigate(['']);
        this.loginUser=this.transferedData[i];
        this.transfer.setLogedUser(this.loginUser);
        console.log('user loged is ',this.loginUser);
      }
      else{
        console.log("NOT FOUNDDDD")
      }
    }
  }

  login(data:NgForm): void {
    console.log(data);
  }

  ngOnInit() {
  }
}
