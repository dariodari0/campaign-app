import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../services/campaigns.services';
import { Campaign } from '../models/campaign';

@Component({
  selector: 'app-on-campaigns',
  templateUrl: './on-campaigns.component.html',
  styleUrls: ['./on-campaigns.component.css']
})
export class OnCampaignsComponent implements OnInit {

  runningCampaignsList = [];

  constructor(private campaignsService: CampaignsService) {
    this.campaignsService.getRunningCampaignsObs().subscribe((campaign: Array<Campaign>) => {
      this.runningCampaignsList = campaign.filter(c => c.status === true);
    });
  }

  deleteCampaign(id) {
    this.campaignsService.deleteCampaign(id);
  }

  switchOff(id) {
    this.campaignsService.statusOff(id);
  }

  ngOnInit() {

  }

}
