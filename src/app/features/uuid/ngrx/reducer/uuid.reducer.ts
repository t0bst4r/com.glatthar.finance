import {UuidState} from '../state/uuid.state';
import {ActionReducerMap} from '@ngrx/store';
import {usedUuidsReducerFn} from './used-uuids.reducer';

export const uuidReducer: ActionReducerMap<UuidState> = {
  usedUuids: usedUuidsReducerFn
};
