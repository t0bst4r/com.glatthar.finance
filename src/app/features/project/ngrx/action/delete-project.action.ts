import {createAction, props} from '@ngrx/store';

export const deleteProject = createAction('project/delete', props<{ id: string }>());
