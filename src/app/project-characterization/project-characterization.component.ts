import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentsService} from '../components/components.service';

@Component({
  selector: 'app-project-characterization',
  templateUrl: './project-characterization.component.html',
  styleUrls: ['./project-characterization.component.css']
})
export class ProjectCharacterizationComponent implements OnInit {
  // projectId: string;
  // allProjectIds: string[];
  // selectedComponent: string;
  // componentTypes: string[];
  // files: string;
  // fileTypes: string[];
  // json: string;
  //
  // constructor(private componentsService: ComponentsService, private httpClient: HttpClient,
  //             private router: Router, private route: ActivatedRoute) {
  // }
  //
  ngOnInit() {
  //   console.log(this.selectedComponent);
  //   this.componentsService.getComponents().subscribe(components => this.allProjectIds = components.map(p => p.name));
  }
  //
  // projectIdChange(projectId: string) {
  //   // refresh the form
  //   // TODO: show an alert you are about to lose your work because of this change
  //   const answer = window.confirm('Lose data?');
  //   if (answer) {
  //     this.router.navigate(['../'], {relativeTo: this.route});
  //   } else {
  //     this.selectedComponent = null;
  //     this.httpClient.get('http://localhost:8080/component/names?projectId=' + projectId)
  //       .subscribe((componentTypes: string[]) => this.componentTypes = componentTypes);
  //   }
  // }
  //
  // // should actually be createChart -> should send the form to the backend to get JSON to crete the chart
  // showResults() {
  //
  //   const body = {
  //     projectId: this.projectId,
  //     componentName: this.selectedComponent,
  //     files: this.files
  //   };
  //
  //   console.log(this.projectId, this.selectedComponent, this.files);
  //
  //   this.httpClient.post('http://localhost:8080/create/relationComponent', body).subscribe(value => console.log(value));
  // }
  //
  //
  // entityChange(selectedComponent: string) {
  //   this.httpClient.get('http://localhost:8080/compRelation/files?Component=' + selectedComponent + '&projectId=' + this.projectId)
  //     .subscribe((fileTypes: string[]) => this.fileTypes = fileTypes);
  // }
}
