import {NgModule} from '@angular/core';
import {AccountBalanceTableComponent} from './account-balance-table.component';
import {AccountBalanceModule} from '../account-balance.module';
import {ChartsModule} from 'ng2-charts';
import {ResizeDetectModule} from '../../resize/detect/resize-detect.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ChartsModule,
    ResizeDetectModule,
    AccountBalanceModule,
    CommonModule
  ],
  declarations: [AccountBalanceTableComponent],
  exports: [AccountBalanceTableComponent]
})
export class AccountBalanceTableModule {
}
