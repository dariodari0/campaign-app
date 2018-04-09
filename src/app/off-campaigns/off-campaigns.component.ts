import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CampaignsService } from '../services/campaigns.services';

@Component({
  selector: 'app-off-campaigns',
  templateUrl: './off-campaigns.component.html',
  styleUrls: ['./off-campaigns.component.css']
})
export class OffCampaignsComponent implements OnInit {

  disabledCampaignsList: Array<Campaign>;

  constructor(private campaignsService: CampaignsService) {
    this.campaignsService.getRunningCampaignsObs().subscribe((campaigns: Array<Campaign>) => {
      this.disabledCampaignsList = campaigns.filter(c => c.status === false);
    });
  }
  deleteCampaign(id) {
    this.campaignsService.deleteCampaign(id);
  }
   switchOn(id) {
    this.campaignsService.statusOn(id);
  }

  ngOnInit() {
  }

}
