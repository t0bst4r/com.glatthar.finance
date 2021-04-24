import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {Store} from '@ngrx/store';
import {selectProjectById, selectProjectList} from '../ngrx/selector/project.selector';
import {UuidService} from '../../uuid/service/uuid.service';
import {map} from 'rxjs/operators';
import {assign} from 'lodash-es';
import {createOrUpdateProject} from '../ngrx/action/create-or-update-project.action';

@Injectable()
export class ProjectService {

  constructor(private readonly uuidService: UuidService,
              private readonly store$: Store) {
  }

  public getProject(projectId: string): Observable<Project | undefined> {
    return this.store$.select(selectProjectById(), {projectId});
  }

  public getAllProjects(): Observable<Array<Project>> {
    return this.store$.select(selectProjectList);
  }

  public createProject(newProject: Omit<Project, 'id'>): Promise<string> {
    return new Promise(resolve => {
      this.uuidService.generate().pipe(
        map(id => assign({id}, newProject))
      ).subscribe(project => {
        this.updateProject(project).then(() => resolve(project.id));
      });
    });
  }

  public updateProject(project: Project): Promise<void> {
    return new Promise(resolve => {
      this.store$.dispatch(createOrUpdateProject({project}));
      resolve();
    });
  }

}
