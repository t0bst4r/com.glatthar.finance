import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {AccountBalanceService} from '../account-balance.service';
import {BaseChartDirective, Color, Label as ChartLabel} from 'ng2-charts';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Account} from '../../account/model/account';
import {AccountTransaction} from '../../transaction/model/account-transaction';

@Component({
  selector: 'account-balance-chart',
  templateUrl: 'account-balance-chart.component.html',
  styleUrls: ['account-balance-chart.component.scss'],
})
export class AccountBalanceChartComponent implements OnChanges {

  public labels: Array<ChartLabel> = [];
  public options: ChartOptions = {responsive: true, maintainAspectRatio: false};
  public readonly colors: Array<Color> = [];

  public datasets: Array<ChartDataSets> = [];

  @ViewChild(BaseChartDirective, {static: true})
  public chart?: BaseChartDirective;

  @Input()
  public timeline?: Array<Date> | null;
  @Input()
  public accounts?: Array<Account> | null;
  @Input()
  public transactions?: Array<AccountTransaction> | null;

  constructor(private readonly accountBalanceService: AccountBalanceService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const accounts = this.accounts || [];
    const transactions = this.transactions || [];
    const timeline = this.timeline || [];

    this.labels = timeline.map(it => it.toLocaleDateString());

    const balances: Array<ChartDataSets> = accounts.map(account => ({
      data: this.accountBalanceService
        .createAccountBalancePerMonth(account.id, timeline, 0, transactions),
      label: account.name,
      type: 'line'
    }));
    const values: Array<ChartDataSets> = accounts.map(account => ({
      data: this.accountBalanceService.createTransactionValuePerMonth(account.id, timeline, transactions),
      label: account.name + ' (Transactions)',
      type: 'bar'
    }));
    this.datasets = [...balances, ...values];
  }

  public resizeDetected(): void {
    this.options = {...this.options};
  }
}
