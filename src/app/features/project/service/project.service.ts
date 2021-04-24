import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../model/project';
import {Store} from '@ngrx/store';
import {selectCurrentProjectId, selectProjectList} from '../ngrx/selector/project.selector';
import {UuidService} from '../../uuid/service/uuid.service';
import {map, tap} from 'rxjs/operators';
import {assign} from 'lodash';
import {createOrUpdateProject} from '../ngrx/action/create-or-update-project.action';
import {selectProject} from '../ngrx/action/select-project.action';

@Injectable()
export class ProjectService {

  constructor(private uuidService: UuidService,
              private store$: Store) {
  }

  public getCurrentProject(): Observable<string | undefined> {
    return this.store$.select(selectCurrentProjectId);
  }

  public getAllProjects(): Observable<Array<Project>> {
    return this.store$.select(selectProjectList);
  }

  public createProject(newProject: Omit<Project, 'id'>, autoSelectProject: boolean = false): void {
    this.uuidService.generate().pipe(
      map(id => assign({id}, newProject))
    ).subscribe(project => {
      this.updateProject(project);
      if (autoSelectProject) {
        this.selectProject(project.id);
      }
    });
  }

  public updateProject(project: Project): void {
    this.store$.dispatch(createOrUpdateProject({project}));
  }

  public selectProject(id: string): void {
    this.store$.dispatch(selectProject({id}));
  }
}
