import {NgModule} from '@angular/core';
import {ProjectPageComponent} from './project-page.component';
import {ProjectPageRoutes} from './project-page.routes';
import {CommonModule} from '@angular/common';
import {ProjectModule} from '../../features/project/project.module';
import {AccountBalanceChartModule} from '../../features/account-balance/chart/account-balance-chart.module';
import {AccountModule} from '../../features/account/account.module';
import {TransactionModule} from '../../features/transaction/transaction.module';
import {AccountBalanceTableModule} from '../../features/account-balance/table/account-balance-table.module';

@NgModule({
    imports: [
        CommonModule,
        ProjectPageRoutes,

        ProjectModule,
        AccountModule,
        TransactionModule,
        AccountBalanceChartModule,
        AccountBalanceTableModule
    ],
  declarations: [
    ProjectPageComponent
  ]
})
export class ProjectPageModule {
}
