import {createAction, props} from '@ngrx/store';
import {Account} from '../../model/account';
import {AccountFeatureName} from '../../account-feature-name';

export const createOrUpdateAccount = createAction(`${AccountFeatureName}/create-or-update`, props<{ account: Account }>());
