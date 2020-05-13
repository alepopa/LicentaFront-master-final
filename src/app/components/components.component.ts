import {Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentsService} from './components.service';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
  providers: [ComponentsService]
})
export class ComponentsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
