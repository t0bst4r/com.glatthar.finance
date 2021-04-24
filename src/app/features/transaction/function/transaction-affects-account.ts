import {AccountTransaction} from '../model/account-transaction';
import {AccountDebitTransaction} from '../model/account-debit-transaction';
import {AccountCreditTransaction} from '../model/account-credit-transaction';

export function transactionAffectsOneAccountIdIn(transaction: AccountTransaction, accountIds: Array<string>): boolean {
  const debitTransaction = transaction as AccountDebitTransaction;
  const creditTransaction = transaction as AccountCreditTransaction;
  return (debitTransaction.chargedAccountId != null && accountIds.includes(debitTransaction.chargedAccountId))
    || (creditTransaction.creditedAccountId != null && accountIds.includes(creditTransaction.creditedAccountId));
}

export function transactionAffectsAccountId(transaction: AccountTransaction, accountId: string): boolean {
  const debitTransaction = transaction as AccountDebitTransaction;
  const creditTransaction = transaction as AccountCreditTransaction;
  return debitTransaction.chargedAccountId === accountId || creditTransaction.creditedAccountId === accountId;
}

export function transactionValueForAccountId(transaction: AccountTransaction, accountId: string): number {
  const debitTransaction = transaction as AccountDebitTransaction;
  const creditTransaction = transaction as AccountCreditTransaction;
  return (debitTransaction.chargedAccountId === accountId ? -debitTransaction.value : 0)
    + (creditTransaction.creditedAccountId === accountId ? creditTransaction.value : 0);
}

export function transactionIsExecutedBetween(transaction: AccountTransaction, first: Date, second: Date): number {
  let result = 0;
  if (first < transaction.executionDate && transaction.executionDate <= second) {
    result += 1;
  }
  // TODO: standing transactions
  return result;
}
