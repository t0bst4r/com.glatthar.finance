import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {UuidService} from '../../uuid/service/uuid.service';
import {map} from 'rxjs/operators';
import {assign} from 'lodash-es';
import {Account} from '../model/account';
import {selectAccountById, selectAccountListByProjectId} from '../ngrx/selector/account.selector';
import {createOrUpdateAccount} from '../ngrx/action/create-or-update-account.action';

@Injectable()
export class AccountService {

  constructor(private readonly uuidService: UuidService,
              private readonly store$: Store) {
  }

  public getAccount(accountId: string): Observable<Account | undefined> {
    return this.store$.select(selectAccountById(), {accountId});
  }

  public getAllAccounts(projectId: string): Observable<Array<Account>> {
    return this.store$.select(selectAccountListByProjectId(), {projectId});
  }

  public createAccount(newAccount: Omit<Account, 'id'>): Promise<string> {
    return new Promise(resolve => {
      this.uuidService.generate().pipe(
        map(id => assign({id}, newAccount))
      ).subscribe(account => {
        this.updateAccount(account).then(() => resolve(account.id));
      });
    });
  }

  public updateAccount(account: Account): Promise<void> {
    return new Promise(resolve => {
      this.store$.dispatch(createOrUpdateAccount({account}));
      resolve();
    });
  }

}
