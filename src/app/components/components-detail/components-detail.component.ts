import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {flatMap, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ProjectsComponent} from '../../projects/components.model';
import {ComponentsService} from '../components.service';

@Component({
  selector: 'app-components-detail',
  templateUrl: './components-detail.component.html',
  styleUrls: ['./components-detail.component.css']
})
export class ComponentsDetailComponent implements OnInit {
  // component: ProjectsComponent;
  // // componentName = 'projectDetail';
  // // files = ['file1' , 'file2'];
  // constructor(private componentService: ComponentsService,
  //             private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {
  // }

  ngOnInit() {
    // this.route.params.pipe(
    //   map(params => params.id),
    //   flatMap(id => this.componentService.getComponentById(id)))
    //   .subscribe((component: ProjectsComponent) => this.component = component);
  }

  // showCharacterization() {
  //   const body = {
  //     componentName :  this.componentName,
  //     files : this.files
  //   };
  // // }
  // onCharProject() {
  //   this.router.navigate(['projectCharacterization'], {relativeTo: this.route});
  //   // this.router.navigateByUrl('/projectCharacterization', {relativeTo: this.route});
  // }
}

