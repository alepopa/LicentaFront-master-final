import {Injectable} from '@angular/core';
import {Project} from './projects.model';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {ProjectsComponent} from './components.model';

@Injectable()
export class ProjectsService {
  public projects: Project[];
  public components: ProjectsComponent[];
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get('http://localhost:8080/projects/all')
      .pipe(tap((projects: Project[]) => this.projects = projects));
  }

  getProjectById(id: string): Observable<Project> {
    if (this.projects === undefined) {
      return this.getProjects().pipe(map(projects => projects.find(proj => proj.projectId === id)));
    } else {
      return of(this.projects.find(proj => proj.projectId === id));
    }
  }

  getComponents(projectId: string): Observable<ProjectsComponent[]> {
    return this.httpClient.get('http://localhost:8080/components/allComponents?projectId=' + projectId)
      .pipe(tap((components: ProjectsComponent[]) => this.components = components));
  }

  getComponentById(projectId: string, id: string): Observable<ProjectsComponent> {
    if (this.components === undefined) {
      return this.getComponents(projectId).pipe(map(components => components.find(comp => comp.componentName === id)));
    } else {
      return of(this.components.find(comp => comp.componentName === id));
    }
  }

}


