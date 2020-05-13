import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../projects.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-upload-project',
  templateUrl: './upload-project.component.html',
  styleUrls: ['./upload-project.component.css'],
  providers: [ProjectsService]
})
export class UploadProjectComponent implements OnInit {
  file: FileList;
  projectId: string;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,
              private projectService: ProjectsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  selectFile(event) {
    console.log(event);
    this.file = event.target.files;
  }

  cancelFile() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  uploadFile() {
    const formdata: FormData = new FormData();
    let i;
    for (i = 0; i < this.file.length; i++) {
      formdata.append('jsonFile', this.file[i]);
      console.log(this.file[i]);
    }
    formdata.append('projectId', this.projectId);

    this.httpClient.post('http://localhost:8080/create/upload', formdata)
      .subscribe(value => console.log(value),
        error => console.log(error),
        () => console.log('complete'));
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  // uploadFileForComponent() {
  //   const formdata: FormData = new FormData();
  //   formdata.append('jsonFile', this.file[0]);
  //   formdata.append('projectId', this.projectId);
  //
  //   this.httpClient.post('http://localhost:8080/create/upload', formdata)
  //     .subscribe(value => console.log(value),
  //       error => console.log(error),
  //       () => console.log('complete'));
  // }

}
