import {Injectable} from '@angular/core';
import {AccountTransaction} from '../transaction/model/account-transaction';
import {
  transactionAffectsAccountId,
  transactionIsExecutedBetween,
  transactionValueForAccountId
} from '../transaction/function/transaction-affects-account';

@Injectable()
export class AccountBalanceService {

  public createAccountBalancePerMonth(
    accountId: string, timeline: Array<Date>, startValue: number, transactions: Array<AccountTransaction>): Array<number> {
    let currentValue = startValue;
    const result: Array<number> = [startValue];
    for (let i = 1; i < timeline.length; i++) {
      currentValue += transactions
        .filter(transaction => transactionAffectsAccountId(transaction, accountId))
        .map(transaction => this.calculateTransactionValue(transaction, accountId, timeline[i - 1], timeline[i]))
        .reduce((prev, curr) => prev + curr, 0);
      result.push(currentValue);
    }
    return result;
  }

  public createTransactionValuePerMonth(accountId: string, timeline: Array<Date>, transactions: Array<AccountTransaction>): Array<number> {
    const result: Array<number> = [0];
    for (let i = 1; i < timeline.length; i++) {
      const value = transactions
        .filter(transaction => transactionAffectsAccountId(transaction, accountId))
        .map(transaction => this.calculateTransactionValue(transaction, accountId, timeline[i - 1], timeline[i]))
        .reduce((prev, curr) => prev + curr, 0);
      result.push(value);
    }
    return result;
  }

  private calculateTransactionValue(transaction: AccountTransaction, accountId: string, prev: Date, curr: Date): number {
    return transactionValueForAccountId(transaction, accountId) * transactionIsExecutedBetween(transaction, prev, curr);
  }
}
