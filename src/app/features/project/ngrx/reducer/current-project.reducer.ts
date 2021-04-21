import {Action, createReducer, on} from '@ngrx/store';
import { deleteProject } from '../action/delete-project.action';
import {selectProject} from '../action/select-project.action';

const currentProjectReducer = createReducer<string | undefined>(undefined,
  on(deleteProject, (state, {id}) => id === state ? undefined : state),
  on(selectProject, (_, {id}) => id)
);

export function currentProjectReducerFn(state: string | undefined, action: Action): string | undefined {
  return currentProjectReducer(state, action);
}
