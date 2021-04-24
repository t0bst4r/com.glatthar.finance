import {Project} from '../../model/project';

export interface ProjectState {
  projects: Record<string, Project>;
}
