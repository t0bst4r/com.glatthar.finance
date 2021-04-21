import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../../environments/environment';

export const AppStoreModules = [
  StoreModule.forRoot({}),
  StoreDevtoolsModule.instrument({logOnly: environment.production})
];
