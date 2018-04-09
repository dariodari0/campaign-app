import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OnCampaignsComponent } from './on-campaigns/on-campaigns.component';
import { OffCampaignsComponent } from './off-campaigns/off-campaigns.component';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalanceFromEmberaldComponent } from './form-campaign/balance-from-emberald/balance-from-emberald.component';
import { CampaignsService } from './services/campaigns.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    OnCampaignsComponent,
    OffCampaignsComponent,
    FormCampaignComponent,
    BalanceFromEmberaldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CampaignsService, ReactiveFormsModule, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
