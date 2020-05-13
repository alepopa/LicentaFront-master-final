import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../projects/projects.service';

@Component({
  selector: 'app-create-relation',
  templateUrl: './create-relation.component.html',
  styleUrls: ['./create-relation.component.css']
})
export class CreateRelationComponent implements OnInit {
  projectId: string;
  allProjectIds: string[];
  entityTypes: string[];
  selectedEntity: string;
  aspectTypes: string[];
  selectedAspect: string;
  indicators: string;
  indicatorList: string[];
  views = new FormControl();
  viewList: string[] = ['view1', 'view2', 'view3'];
  json: string;

  constructor(private projectsService: ProjectsService, private httpClient: HttpClient,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.selectedEntity);
    this.projectsService.getProjects().subscribe(projects => this.allProjectIds = projects.map(p => p.projectId));
  }

  projectIdChange(projectId: string) {
    // refresh the form
    // TODO: show an alert you are about to lose your work because of this change
    const answer = window.confirm('Lose data?');
    if (answer) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.selectedEntity = null;
      this.httpClient.get('http://localhost:8080/file/names?projectId=' + projectId)
        .subscribe((entityTypes: string[]) => this.entityTypes = entityTypes);
    }
  }

  // should actually be createChart -> should send the form to the backend to get JSON to crete the chart
  showResults() {
    this.json = '{\n' +
      '  "projectId":' + String(this.projectId) + ', "entities": [\n' + '    {\n' +
      '      "type": ' + String(this.selectedEntity) + '}],' +
      ' "Aspect": [\n ' + '    {\n' + '      "type": ' + String(this.selectedAspect) + '}],' +
      ' "View": [\n ' + '    {\n' + '      "type": ' + String(this.viewList[0]) + '}],' +
      ' "Indicator": [\n ' + '    {\n' + '      "type": ' + String(this.indicators) + '}]';

    console.log(this.json);

    const body = {
      projectId: this.projectId,
      files: this.selectedEntity,
      qualityAspect: this.selectedAspect,
      qualityIndicators: this.indicators,
    };

    this.httpClient.post('http://localhost:8080/create/relation', body).subscribe(value => console.log(value));
  }

  entityChange(selectedEntity: string) {
    this.httpClient.get('http://localhost:8080/relation/aspects?EntityType=' + selectedEntity + '&projectId=' + this.projectId)
      .subscribe((aspectTypes: string[]) => this.aspectTypes = aspectTypes);
  }

  aspectChange(selectedAspect: string) {
    this.httpClient.get('http://localhost:8080/relation/indicators?EntityType=' + this.selectedEntity + '&AspectId=' + selectedAspect +
      '&projectId=' + this.projectId)
      .subscribe((indicatorsTypes: string[]) => this.indicatorList = indicatorsTypes);
  }

}
