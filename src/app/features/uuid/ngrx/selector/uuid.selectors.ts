import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UuidState} from '../state/uuid.state';
import {UuidFeatureName} from '../../uuid-feature-name';

export const uuidFeatureSelector = createFeatureSelector<UuidState>(UuidFeatureName);

export const selectUsedUuids = createSelector(uuidFeatureSelector, state => state.usedUuids);
