import {AccountDebitTransaction} from './account-debit-transaction';
import {AccountCreditTransaction} from './account-credit-transaction';

export interface AccountTransferTransaction extends AccountDebitTransaction, AccountCreditTransaction {
}
