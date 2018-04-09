import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Campaign } from '../models/campaign';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HttpService {

  readonly apiURL = 'https://api.mlab.com/api/1/databases/campaigns_db/collections/camp';
  readonly prm = new HttpParams().set('apiKey', 'xVtotWejJQa2Nnd-eI0ntRlu_l6u9B5Z');

  constructor(private http: HttpClient) {
    this.getCampaigns();
  }

  getCampaigns(): Observable<Array<Campaign>> {
    return this.http.get<Array<Campaign>>(this.apiURL, { params: this.prm });
  }

  saveCampaign(campaing: Array<Campaign>) {
    this.http.post<Array<Campaign>>(this.apiURL, campaing, { params: this.prm }).subscribe();
  }

  updateCampaign(camp, id) {
    this.http.put<Array<Campaign>>(`${this.apiURL}/${id.$oid}`, camp, { params: this.prm }).subscribe();
  }

  deleteCampaign(id) {
    console.log(id);
    this.http.delete<Array<Campaign>>(`${this.apiURL}/${id.$oid}?apiKey=xVtotWejJQa2Nnd-eI0ntRlu_l6u9B5Z`).subscribe();
  }

}
