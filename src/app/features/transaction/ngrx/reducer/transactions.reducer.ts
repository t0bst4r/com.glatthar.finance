import {AccountTransaction} from '../../model/account-transaction';
import {Action, createReducer, on} from '@ngrx/store';
import {createOrUpdateTransaction} from '../action/create-or-update-transaction.action';
import {assign} from 'lodash-es';

const transactionsReducer = createReducer<Record<string, AccountTransaction>>({},
  on(createOrUpdateTransaction, (transactions, {transaction}) => assign({}, transactions, {[transaction.id]: transaction}))
);

export function transactionsReducerFn(transactions: Record<string, AccountTransaction> | undefined, action: Action)
  : Record<string, AccountTransaction> {
  return transactionsReducer(transactions, action);
}
