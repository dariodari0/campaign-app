import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-balance-from-emberald',
  templateUrl: './balance-from-emberald.component.html',
  styleUrls: ['./balance-from-emberald.component.css']
})
export class BalanceFromEmberaldComponent implements OnChanges {

  @Input()
  campFund;

  private actualEmberaldBalance = 9999;
  public newBalance = 0;

  ngOnChanges() {
    this.newBalance = this.actualEmberaldBalance - this.campFund;
  }


}
