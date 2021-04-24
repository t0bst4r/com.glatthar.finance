import {createAction, props} from '@ngrx/store';
import {Project} from '../../model/project';
import {ProjectFeatureName} from '../../project-feature-name';

export const createOrUpdateProject = createAction(`${ProjectFeatureName}/create-or-update`, props<{ project: Project }>());
