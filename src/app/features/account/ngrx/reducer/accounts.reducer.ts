import {Account} from '../../model/account';
import {Action, createReducer, on} from '@ngrx/store';
import {createOrUpdateAccount} from '../action/create-or-update-account.action';
import {assign} from 'lodash-es';

const accountsReducer = createReducer<Record<string, Account>>({},
  on(createOrUpdateAccount, (projects, {account}) => assign({}, projects, {[account.id]: account}))
);

export function accountsReducerFn(accounts: Record<string, Account> | undefined, action: Action): Record<string, Account> {
  return accountsReducer(accounts, action);
}
