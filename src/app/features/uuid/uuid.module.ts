import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {UuidFeatureName} from './uuid-feature-name';
import {UuidState} from './ngrx/state/uuid.state';
import {uuidReducer} from './ngrx/reducer/uuid.reducer';
import {UuidService} from './service/uuid.service';

@NgModule({
  imports: [
    StoreModule.forFeature<UuidState>(UuidFeatureName, uuidReducer)
  ],
  providers: [
    UuidService
  ]
})
export class UuidModule {
}
