import {AccountTransaction} from '../../model/account-transaction';

export interface TransactionState {
  transactions: Record<number, AccountTransaction>;
}
