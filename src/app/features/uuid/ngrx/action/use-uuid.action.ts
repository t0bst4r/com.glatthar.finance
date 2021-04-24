import {createAction, props} from '@ngrx/store';
import {UuidFeatureName} from '../../uuid-feature-name';

export const useUuid = createAction(`${UuidFeatureName}/use`, props<{ uuid: string }>());
