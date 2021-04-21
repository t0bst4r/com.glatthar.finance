import {Action, createReducer, on} from '@ngrx/store';
import {useUuid} from '../action/use-uuid.action';

const usedUuidsReducer = createReducer<Array<string>>([],
  on(useUuid, (state, {uuid}) => [...state, uuid])
);

export function usedUuidsReducerFn(state: Array<string> | undefined, action: Action): Array<string> {
  return usedUuidsReducer(state, action);
}