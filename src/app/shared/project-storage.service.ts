import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../projects/projects.service';

@Injectable()
export class ProjectStorageService {
  constructor(private http: HttpClient, private projectsService: ProjectsService) {
  }

  storeProjects() {
    const project = this.projectsService.getProjects();
    this.http.post('http://localhost:8080/projects/add', project).subscribe(value => console.log(value),
      error => console.log(error),
      () => console.log('complete'));

  }


}
