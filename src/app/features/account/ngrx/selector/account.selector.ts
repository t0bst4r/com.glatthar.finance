import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AccountFeatureName} from '../../account-feature-name';
import {AccountState} from '../state/account.state';
import {values, filter, pickBy} from 'lodash-es';
import {Account} from '../../model/account';

export const accountFeatureSelector = createFeatureSelector<AccountState>(AccountFeatureName);

export const selectAccounts = createSelector(accountFeatureSelector, state => state.accounts);
export const selectAccountsByProjectId = () => createSelector(selectAccounts,
  (accounts: Record<string, Account>, props: { projectId: string }) => pickBy(accounts, account => account.projectId === props.projectId));
export const selectAccountList = createSelector(selectAccounts, accounts => values(accounts));
export const selectAccountListByProjectId = () => createSelector(selectAccountsByProjectId(), accounts => values(accounts));
export const selectAccountById = () => createSelector(selectAccounts,
  (accounts: Record<string, Account>, props: { accountId: string }) => accounts[props.accountId]);
