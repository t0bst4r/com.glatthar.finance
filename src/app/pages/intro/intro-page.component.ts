import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../features/project/service/project.service';

@Component({
  templateUrl: 'intro-page.component.html',
  styleUrls: ['intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  constructor(private projectService: ProjectService) {
  }

  public ngOnInit(): void {

  }

  public createNewProject(): void {
  }

  public proceedProject(): void {
  }

  public loadProject(): void {
  }
}
