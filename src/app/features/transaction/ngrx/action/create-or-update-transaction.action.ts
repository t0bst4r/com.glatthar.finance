import {createAction, props} from '@ngrx/store';
import {TransactionFeatureName} from '../../transaction-feature-name';
import {AccountTransaction} from '../../model/account-transaction';

export const createOrUpdateTransaction = createAction(`${TransactionFeatureName}/create-or-update`,
  props<{ transaction: AccountTransaction }>());
