import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('../pages/intro/intro-page.module').then(m => m.IntroPageModule)},
  {path: 'project', loadChildren: () => import('../pages/project/project-page.module').then(m => m.ProjectPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
