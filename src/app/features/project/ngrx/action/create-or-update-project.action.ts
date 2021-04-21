import {createAction, props} from '@ngrx/store';
import {Project} from '../../model/project';

export const createOrUpdateProject = createAction('project/create-or-update', props<{ project: Project }>());
