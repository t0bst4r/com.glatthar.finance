import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {Store} from '@ngrx/store';
import {selectCurrentProject, selectProjectList} from '../ngrx/selector/project.selector';
import {UuidService} from '../../uuid/service/uuid.service';
import {map} from 'rxjs/operators';
import {assign} from 'lodash';
import {createOrUpdateProject} from '../ngrx/action/create-or-update-project.action';

@Injectable()
export class ProjectService {

  constructor(private uuidService: UuidService,
              private store$: Store) {
  }

  public getCurrentProject(): Observable<Project | undefined> {
    return this.store$.select(selectCurrentProject);
  }

  public getAllProjects(): Observable<Array<Project>> {
    return this.store$.select(selectProjectList);
  }

  public createProject(newProject: Omit<Project, 'id'>): void {
    this.uuidService.generate().pipe(
      map(uuid => assign({id: uuid}, newProject))
    ).subscribe(project => this.updateProject(project));
  }

  public updateProject(project: Project): void {
    this.store$.dispatch(createOrUpdateProject({project}));
  }

}
