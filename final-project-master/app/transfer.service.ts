import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private urlHistory: Array<any>;
  private logedUser: object;
  constructor() {
    this.urlHistory = [];
    this.logedUser={};
  }

  public setUrlHistoryObj(val: Array<any>): void {
      this.urlHistory = val;
  }

  public getUrlHistoryObj(): Array<any> {
      return this.urlHistory;
  }

  public setLogedUser(val: object): void {
      this.logedUser = val;
  }

  public getLogedUser(): object {
      return this.logedUser;
  }

}
