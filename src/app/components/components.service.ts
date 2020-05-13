import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {ProjectsComponent} from '../projects/components.model';

@Injectable()
export class ComponentsService {
  // public components: ProjectsComponent[];
  //
  // constructor(private httpClient: HttpClient) {
  // }
  //
  // getComponents(): Observable<ProjectsComponent[]> {
  //   return this.httpClient.get('http://localhost:8080/components/allComponents')
  //     .pipe(tap((components: ProjectsComponent[]) => this.components = components));
  // }

  // getComponentById(id: string): Observable<ProjectsComponent> {
  //   if (this.components === undefined) {
  //     return this.getComponents().pipe(map(components => components.find(comp => comp.name === id)));
  //   } else {
  //     return of(this.components.find(comp => comp.name === id));
  //   }
  // }
}


