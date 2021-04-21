import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProjectFeatureName} from '../../project-feature-name';
import {ProjectState} from '../state/project.state';
import {values} from 'lodash';

export const projectFeatureSelector = createFeatureSelector<ProjectState>(ProjectFeatureName);

export const selectProjects = createSelector(projectFeatureSelector, state => state.projects);
export const selectProjectList = createSelector(selectProjects, projects => values(projects));
export const selectCurrentProjectId = createSelector(projectFeatureSelector, state => state.currentProject);
export const selectCurrentProject = createSelector(selectProjects, selectCurrentProjectId,
  (projects, id) => id ? projects[id] : undefined);
