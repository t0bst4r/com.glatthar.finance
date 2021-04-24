import {AccountTransaction} from './account-transaction';

export interface AccountCreditTransaction extends AccountTransaction {
  creditedAccountId: string;
}
