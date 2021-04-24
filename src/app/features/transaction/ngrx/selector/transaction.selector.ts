import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TransactionFeatureName} from '../../transaction-feature-name';
import {TransactionState} from '../state/transaction.state';
import {pickBy, values} from 'lodash-es';
import {AccountTransaction} from '../../model/account-transaction';
import {transactionAffectsOneAccountIdIn} from '../../function/transaction-affects-account';

export const transactionFeatureSelector = createFeatureSelector<TransactionState>(TransactionFeatureName);

export const selectTransactions = createSelector(transactionFeatureSelector, state => state.transactions);
export const selectTransactionList = createSelector(selectTransactions, accounts => values(accounts));

export const selectTransactionsByAccountIdIn = () => createSelector(selectTransactions,
  (transactions: Record<string, AccountTransaction>, props: { accountIds: Array<string> }) =>
    pickBy(transactions, transaction => transactionAffectsOneAccountIdIn(transaction, props.accountIds)));
export const selectTransactionListByAccountIdIn = () => createSelector(selectTransactionsByAccountIdIn(), accounts => values(accounts));

export const selectTransactionById = () => createSelector(selectTransactions,
  (transactions: Record<string, AccountTransaction>, props: { transactionId: string }) => transactions[props.transactionId]);

