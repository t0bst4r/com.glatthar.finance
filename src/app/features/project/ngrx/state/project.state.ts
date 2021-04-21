import {Project} from '../../model/project';

export interface ProjectState {
  currentProject?: string;
  projects: Record<string, Project>;
}
