import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {TransactionFeatureName} from './transaction-feature-name';
import {TransactionState} from './ngrx/state/transaction.state';
import {transactionReducer} from './ngrx/reducer/transaction.reducer';
import {UuidModule} from '../uuid/uuid.module';
import {TransactionService} from './service/transaction.service';

@NgModule({
  imports: [
    StoreModule.forFeature<TransactionState>(TransactionFeatureName, transactionReducer),
    UuidModule
  ],
  providers: [TransactionService]
})
export class TransactionModule {
}
