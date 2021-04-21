import {Action, createReducer, on} from '@ngrx/store';
import {assign, omit} from 'lodash';
import {Project} from '../../model/project';
import {createOrUpdateProject} from '../action/create-or-update-project.action';
import {deleteProject} from '../action/delete-project.action';

const projectsReducer = createReducer<Record<string, Project>>({},
  on(createOrUpdateProject, (projects, {project}) => assign({}, projects, {[project.id]: project})),
  on(deleteProject, (projects, {id}) => omit(projects, [id]))
);

export function projectsReducerFn(state: Record<string, Project> | undefined, action: Action): Record<string, Project> {
  return projectsReducer(state, action);
}
