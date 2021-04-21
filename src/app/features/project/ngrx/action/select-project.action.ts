import {createAction, props} from '@ngrx/store';

export const selectProject = createAction('project/select', props<{ id: string }>());
