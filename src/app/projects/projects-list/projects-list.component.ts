import {Component, OnInit} from '@angular/core';
import {Project} from '../projects.model';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.projectsService.getProjects().subscribe((projects: Project[]) => this.projects = projects);
  }

  onNewProject() {
    this.router.navigate(['upload'], {relativeTo: this.route});
  }
}
