import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../features/project/service/project.service';

@Component({
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {

  public currentProject$ = this.projectService.getCurrentProject();
  public allProjects$ = this.projectService.getAllProjects();

  constructor(private projectService: ProjectService) {
  }

  public ngOnInit(): void {

  }

  public createNewProject($event?: MouseEvent): void {
    $event?.preventDefault();
    this.projectService.createProject({name: 'dummy'}, true);
  }

  public proceedProject($event: MouseEvent, projectId: string): void {
    $event?.preventDefault();
    this.projectService.selectProject(projectId);
  }

  public importProject($event: MouseEvent): void {
    $event?.preventDefault();
  }
}
