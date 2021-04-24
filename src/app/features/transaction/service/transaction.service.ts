import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {UuidService} from '../../uuid/service/uuid.service';
import {map} from 'rxjs/operators';
import {assign} from 'lodash-es';
import {AccountTransaction} from '../model/account-transaction';
import {selectTransactionById, selectTransactionListByAccountIdIn} from '../ngrx/selector/transaction.selector';
import {createOrUpdateTransaction} from '../ngrx/action/create-or-update-transaction.action';
import {AccountCreditTransaction} from '../model/account-credit-transaction';
import {AccountDebitTransaction} from '../model/account-debit-transaction';

@Injectable()
export class TransactionService {

  constructor(private readonly uuidService: UuidService,
              private readonly store$: Store) {
  }

  public getTransaction(transactionId: string): Observable<AccountTransaction | undefined> {
    return this.store$.select(selectTransactionById(), {transactionId});
  }

  public getAllTransactions(...accountIds: Array<string>): Observable<Array<AccountTransaction>> {
    return this.store$.select(selectTransactionListByAccountIdIn(), {accountIds});
  }

  public createTransaction<T extends AccountTransaction>(newTransaction: Omit<T, 'id'>): Promise<string> {
    return new Promise(resolve => {
      this.uuidService.generate().pipe(
        map(id => assign({id}, newTransaction))
      ).subscribe(transaction => {
        this.updateTransaction(transaction).then(() => resolve(transaction.id));
      });
    });
  }

  public updateTransaction(transaction: AccountTransaction): Promise<void> {
    return new Promise(resolve => {
      this.store$.dispatch(createOrUpdateTransaction({transaction}));
      resolve();
    });
  }

}
