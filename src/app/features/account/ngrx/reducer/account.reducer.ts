import {ActionReducerMap} from '@ngrx/store';
import {AccountState} from '../state/account.state';
import {accountsReducerFn} from './accounts.reducer';

export const accountReducer: ActionReducerMap<AccountState> = {
  accounts: accountsReducerFn
};
