import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AccountBalanceService} from '../account-balance.service';
import {Account} from '../../account/model/account';
import {AccountTransaction} from '../../transaction/model/account-transaction';
import {assign, isEmpty} from 'lodash-es';

@Component({
  selector: 'account-balance-table',
  templateUrl: 'account-balance-table.component.html',
  styleUrls: ['account-balance-table.component.scss'],
})
export class AccountBalanceTableComponent implements OnChanges {

  @Input()
  public timeline?: Array<Date> | null;
  @Input()
  public accounts?: Array<Account> | null;
  @Input()
  public transactions?: Array<AccountTransaction> | null;

  public balances?: Record<string, Array<number>>;

  constructor(private readonly accountBalanceService: AccountBalanceService) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const accounts = this.accounts || [];
    const transactions = this.transactions || [];
    const timeline = this.timeline || [];

    this.balances = accounts.reduce((prev, account) => assign(prev, {
      [account.id]: this.accountBalanceService.createAccountBalancePerMonth(account.id, timeline, 0, transactions)
    }), {});
    if (isEmpty(this.balances)) {
      this.balances = undefined;
    }
  }
}
