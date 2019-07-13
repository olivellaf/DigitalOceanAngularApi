import { Injectable } from '@angular/core';
import { DigitalOcean } from 'dots-wrapper';
import { map } from 'rxjs/operators';
import { ICollection, IDroplet, IAccount } from 'dots-wrapper/dist/common/interfaces';
import { Observable } from 'rxjs';
import { AxiosPromise } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class DigitalOceanService {

  myApiToken = 'YOUR-DIGITALOCEAN-TOKEN-HERE!';
  DO:DigitalOcean;


  constructor() {
    this.DO = new DigitalOcean(this.myApiToken);
  }

  getAccount(): Observable<IAccount> { return this.DO.Account.get().subscribe(); }

  getDroplets(): Observable<ICollection<IDroplet>> { return this.DO.Droplet.list(); }

  getDomains(): AxiosPromise { return this.DO.get('/domains'); }

}
