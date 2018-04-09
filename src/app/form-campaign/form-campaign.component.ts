import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CampaignsService } from '../services/campaigns.services';
import { Campaign } from '../models/campaign';


@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.css']
})
export class FormCampaignComponent implements OnInit {

  newCampaignForm: FormGroup;
  balance: Number = 0;

  constructor(private campaignsService: CampaignsService) { }

  towns = ['Cracow', 'Warsaw', 'Wroclaw', 'London', 'Paris', 'Berlin'];

  ngOnInit() {
    this.newCampaignForm = this.initForm();
    this.newCampaignForm.get('fund').valueChanges.subscribe(value => {
      this.balance = value;
    });
  }

  initForm() {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      keywords: new FormControl(null, Validators.required),
      bid_amount: new FormControl(null, [Validators.required, Validators.min(100)]),
      fund: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      town: new FormControl(this.towns[0]),
      radius: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const newCampaign = this.createNewCampaign();
    this.campaignsService.onSubmit(newCampaign);
    this.onReset();
  }

  createNewCampaign() {
    const campg = new NewCampaign();
    campg.name = this.newCampaignForm.value.name;
    campg.keywords = this.newCampaignForm.value.keywords;
    campg.bid_amount = this.newCampaignForm.value.bid_amount;
    campg.fund = this.newCampaignForm.value.fund;
    campg.status = this.newCampaignForm.value.status;
    campg.town = this.newCampaignForm.value.town;
    campg.radius = this.newCampaignForm.value.radius;
    campg.created = new Date().toLocaleString();
    return campg;
  }
  onReset() {
    this.newCampaignForm.reset({
      town: this.towns[0]
    });
  }
}

class NewCampaign {
  constructor(
    public name?: string,
    public keywords?: Array<string>,
    public bid_amount?: number,
    public fund?: number,
    public status?: boolean,
    public town = 'Cracow',
    public radius?: number,
    public created?: string) { }
}
