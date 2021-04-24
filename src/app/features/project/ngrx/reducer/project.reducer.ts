import {ProjectState} from '../state/project.state';
import {ActionReducerMap} from '@ngrx/store';
import {projectsReducerFn} from './projects.reducer';

export const projectReducer: ActionReducerMap<ProjectState> = {
  projects: projectsReducerFn
};
