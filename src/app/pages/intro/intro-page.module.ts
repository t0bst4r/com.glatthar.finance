import {NgModule} from '@angular/core';
import {IntroPageComponent} from './intro-page.component';
import {IntroPageRoutes} from './intro-page.routes';
import {CommonModule} from '@angular/common';
import {ProjectModule} from '../../features/project/project.module';

@NgModule({
  imports: [
    CommonModule,
    IntroPageRoutes,

    ProjectModule
  ],
  declarations: [
    IntroPageComponent
  ]
})
export class IntroPageModule {
}
