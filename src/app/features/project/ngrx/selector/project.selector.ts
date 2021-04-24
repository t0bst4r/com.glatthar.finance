import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProjectFeatureName} from '../../project-feature-name';
import {ProjectState} from '../state/project.state';
import {values} from 'lodash-es';
import {Project} from '../../model/project';

export const projectFeatureSelector = createFeatureSelector<ProjectState>(ProjectFeatureName);

export const selectProjects = createSelector(projectFeatureSelector, state => state.projects);
export const selectProjectList = createSelector(selectProjects, projects => values(projects));
export const selectProjectById = () => createSelector(selectProjects,
  (projects: Record<string, Project>, props: { projectId: string }) => projects[props.projectId]);
