import {ProjectState} from '../state/project.state';
import {ActionReducerMap} from '@ngrx/store';
import {currentProjectReducerFn} from './current-project.reducer';
import {projectsReducerFn} from './projects.reducer';

export const projectReducer: ActionReducerMap<ProjectState> = {
  currentProject: currentProjectReducerFn,
  projects: projectsReducerFn
};
