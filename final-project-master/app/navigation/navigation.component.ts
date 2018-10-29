import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // registerdTrue:boolean=true;
  registerdTrue:boolean;
  user : any;
  constructor(private transfer:TransferService) {
    this.registerdTrue=false;
    this.user=this.transfer.getLogedUser();
    console.log(this.user);
   }

  ngOnInit() {
    if(this.isEmpty(this.user)) {
    this.registerdTrue = false;
    console.log(this.registerdTrue);
    } else {
        this.registerdTrue = true
        console.log(this.registerdTrue);
    }
  }

   isEmpty(data) {
      for(var key in data) {
          if(data.hasOwnProperty(key))
              return false;
      }
      return true;
  }

}
