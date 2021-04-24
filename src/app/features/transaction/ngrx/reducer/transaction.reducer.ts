import {ActionReducerMap} from '@ngrx/store';
import {TransactionState} from '../state/transaction.state';
import {transactionsReducerFn} from './transactions.reducer';

export const transactionReducer: ActionReducerMap<TransactionState> = {
  transactions: transactionsReducerFn
};
