import {NgModule} from '@angular/core';
import {IntroPageComponent} from './intro-page.component';
import {IntroPageRoutes} from './intro-page.routes';

@NgModule({
  imports: [
    IntroPageRoutes
  ],
  declarations: [
    IntroPageComponent
  ]
})
export class IntroPageModule {
}
