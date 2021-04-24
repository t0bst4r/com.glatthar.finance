import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../features/project/service/project.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  public readonly allProjects$ = this.projectService.getAllProjects();

  constructor(private readonly projectService: ProjectService,
              private readonly router: Router) {
  }

  public ngOnInit(): void {

  }

  public createNewProject($event?: MouseEvent): Promise<boolean> {
    $event?.preventDefault();
    return this.projectService.createProject({name: 'dummy'})
      .then(id => this.proceedProject(id));
  }

  public proceedProject(projectId: string, $event?: MouseEvent): Promise<boolean> {
    $event?.preventDefault();
    return this.router.navigate(['project', projectId]);
  }

  public importProject($event?: MouseEvent): void {
    $event?.preventDefault();
  }
}
