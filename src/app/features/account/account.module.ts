import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AccountFeatureName} from './account-feature-name';
import {AccountState} from './ngrx/state/account.state';
import {accountReducer} from './ngrx/reducer/account.reducer';
import {UuidModule} from '../uuid/uuid.module';
import {AccountService} from './service/account.service';

@NgModule({
  imports: [
    StoreModule.forFeature<AccountState>(AccountFeatureName, accountReducer),
    UuidModule
  ],
  providers: [AccountService]
})
export class AccountModule {
}
