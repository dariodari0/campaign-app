import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Campaign } from '../models/campaign';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';

@Injectable()
export class CampaignsService {

  private runningCampaings: Array<Campaign> = [];

  private runningCampaignsObs = new BehaviorSubject<Array<Campaign>>(this.runningCampaings);

  constructor(private httpService: HttpService) {
    this.getCampaignsFromDB();
    this.runningCampaignsObs.next(this.runningCampaings);
  }


  onSubmit(item) {
    const list = this.runningCampaignsObs.getValue();
    list.push(item);
    this.runningCampaignsObs.next(list);

    this.httpService.saveCampaign(item);
     this.getCampaignsFromDB();
  }

  deleteCampaign(id) {
    const list = this.runningCampaignsObs.getValue().filter(el => el._id.$oid !== id.$oid);
    this.runningCampaignsObs.next(list);

    this.httpService.deleteCampaign(id);
  }

  statusOn(id) {
    const item = this.runningCampaignsObs.getValue().find(el => el._id.$oid === id.$oid);
    item.status = true;

    this.httpService.updateCampaign(item, id);

    const list = this.runningCampaignsObs.getValue();
    this.runningCampaignsObs.next(list);
  }

  statusOff(id) {
    const item = this.runningCampaignsObs.getValue().find(el => el._id.$oid === id.$oid);
    item.status = false;

    this.httpService.updateCampaign(item, id);

    const list = this.runningCampaignsObs.getValue();
    this.runningCampaignsObs.next(list);
  }

  getCampaignsFromDB() {
    this.httpService.getCampaigns().subscribe((campaigns: Array<Campaign>) => {
      this.runningCampaignsObs.next(campaigns);
    });
  }

  getRunningCampaignsObs(): Observable<Array<Campaign>> {
    return this.runningCampaignsObs.asObservable();
  }



}
