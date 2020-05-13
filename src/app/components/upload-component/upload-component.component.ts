import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {ComponentsService} from '../components.service';

@Component({
  selector: 'app-upload-component',
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css'],
  providers: [ComponentsService]
})
export class UploadComponentComponent implements OnInit {
  // file: FileList;
  // projectId: string;
  //
  // constructor(private httpClient: HttpClient, private route: ActivatedRoute,
  //             private componentService: ComponentsService, private router: Router) {
  // }

  ngOnInit(): void {
  }

  // selectFile(event) {
  //   console.log(event);
  //   this.file = event.target.files;
  // }
  //
  // cancelFile() {
  //   this.router.navigate(['../'], {relativeTo: this.route});
  // }
  //
  // uploadFile() {
  //   const formData: FormData = new FormData();
  //   let i;
  //   for (i = 0; i < this.file.length; i++) {
  //     formData.append('jsonFile', this.file[i]);
  //     console.log(this.file[i]);
  //   }
  //   formData.append('projectId', this.projectId);
  //
  //   this.httpClient.post('http://localhost:8080/create/uploadComponents', formData)
  //     .subscribe(value => console.log(value),
  //       error => console.log(error),
  //       () => console.log('complete'));
  // }
}
