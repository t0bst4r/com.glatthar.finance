import {createAction, props} from '@ngrx/store';
import {UuidFeatureName} from '../../uuid-feature-name';

export const releaseUuid = createAction(`${UuidFeatureName}/release`, props<{uuid: string}>());
