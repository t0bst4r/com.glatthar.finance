import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {ProjectFeatureName} from './project-feature-name';
import {ProjectState} from './ngrx/state/project.state';
import {projectReducer} from './ngrx/reducer/project.reducer';
import {ProjectService} from './service/project.service';
import {UuidModule} from '../uuid/uuid.module';

@NgModule({
  imports: [
    StoreModule.forFeature<ProjectState>(ProjectFeatureName, projectReducer),
    UuidModule
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectModule {
}
