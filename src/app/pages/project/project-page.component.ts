import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../features/project/service/project.service';
import {ActivatedRoute} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Project} from '../../features/project/model/project';
import {Account} from '../../features/account/model/account';
import {AccountService} from '../../features/account/service/account.service';
import {AccountTransaction} from '../../features/transaction/model/account-transaction';
import {TransactionService} from '../../features/transaction/service/transaction.service';
import {AccountCreditTransaction} from '../../features/transaction/model/account-credit-transaction';

@Component({
  templateUrl: 'project-page.component.html',
  styleUrls: ['project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  public readonly currentProject$: Observable<Project | undefined> = this.activatedRoute.params.pipe(
    map(params => params.id),
    filter(id => !!id),
    mergeMap(id => this.projectService.getProject(id)),
  );

  public readonly accounts$: Observable<Array<Account>> = this.currentProject$.pipe(
    map(project => project?.id),
    filter(id => !!id),
    mergeMap(id => this.accountService.getAllAccounts(id as string))
  );

  public readonly transactions$: Observable<Array<AccountTransaction>> = this.accounts$.pipe(
    map(accounts => accounts.map(it => it.id)),
    filter(it => !!it.length),
    mergeMap(accounts => this.transactionService.getAllTransactions(...accounts))
  );

  public timeline: Array<Date> = ProjectPageComponent.generateTimeLine();

  private static generateTimeLine(): Array<Date> {
    let currentDate = new Date();
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth());
    return [...Array(15).keys()]
      .map(idx => idx - 3)
      .map(month => new Date(currentDate.getFullYear(), currentDate.getMonth() + month));
  }

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly projectService: ProjectService,
              private readonly accountService: AccountService,
              private readonly transactionService: TransactionService) {
  }

  public ngOnInit(): void {
  }

  public createAccount(projectId: string): void {
    this.accountService.createAccount({
      projectId, name: 'Account'
    });
  }

  public createTransaction(accountId: string, $event?: MouseEvent): void {
    this.transactionService.createTransaction<AccountCreditTransaction>({
      title: 'Trans',
      value: Math.random() * 200 - 100,
      creditedAccountId: accountId,
      executionDate: new Date(new Date().getFullYear(), new Date().getMonth() + Math.random() * 15 - 3)
    });
    $event?.preventDefault();
  }
}
