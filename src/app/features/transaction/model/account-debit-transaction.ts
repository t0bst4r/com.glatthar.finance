import {AccountTransaction} from './account-transaction';

export interface AccountDebitTransaction extends AccountTransaction {
  chargedAccountId: string;
}
