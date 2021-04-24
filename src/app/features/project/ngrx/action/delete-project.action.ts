import {createAction, props} from '@ngrx/store';
import {ProjectFeatureName} from '../../project-feature-name';

export const deleteProject = createAction(`${ProjectFeatureName}/delete`, props<{ id: string }>());
