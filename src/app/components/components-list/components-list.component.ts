import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentsService} from '../components.service';
import {ProjectsComponent} from '../../projects/components.model';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.css']
})
export class ComponentsListComponent implements OnInit {
  // components: ProjectsComponent[];
  //
  // constructor(private componentsService: ComponentsService,
  //             private route: ActivatedRoute,
  //             private router: Router) {
  // }

  ngOnInit() {
    // this.componentsService.getComponents().subscribe((components: ProjectsComponent[]) => this.components = components);
  }
  //
  // onNewProjectComponents() {
  //   this.router.navigate(['uploadComponents'], {relativeTo: this.route});
  // }
}
