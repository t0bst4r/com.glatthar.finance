import {AccountTransaction} from './account-transaction';

export enum AccountStandingTransactionInterval {
  DAY,
  WEEK,
  MONTH,
  YEAR
}

export type AccountStandingTransaction<T extends AccountTransaction> = T & {
  executionInterval: {
    every: number;
    unit: AccountStandingTransactionInterval;
  }
};
