import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectsService} from '../projects.service';

export interface Table {
  componentName: string;
  componentViewDTOS: ComponentViewDTO[];
}

export interface ComponentViewDTO {
  name: string;
  value: number;
}

@Component({
  selector: 'app-view-component-quality-aspect',
  styleUrls: ['view-component-quality-aspect.css'],
  templateUrl: 'view-component-quality-aspect.html',
})

export class ViewComponentQualityAspectComponent implements OnInit {
  private table: any;
  projectId: string;
  name: string;
  componentValuesMap = new Map();
  doubleMap = new Map(new Map());
  propertyValueMap = new Map();
  components: string[];
  properties: string[];
  qaValuesArray: any[];
  valuesArray: any[];

  ngOnInit() {
    this.projectService.currentMessage.subscribe(message => this.projectId = message);
    console.log(this.projectId);
  }

  constructor(private httpClient: HttpClient, private projectService: ProjectsService) {
  }

  @Input()
  set data(table: Table) {
    this.table = JSON.parse(JSON.stringify(table));
    this.createTable();
  }

  private createTable() {
    console.log(this.table);

    function getNames(table) {

      const componentViewDTOS1 = [];
      const componentViewDTOS2 = [];
      table.forEach(table1 => {
        {
          componentViewDTOS1.push(table1.componentViewDTOS);
        }
      });
      componentViewDTOS1.forEach(table2 => {
        table2.forEach(table3 => {
          componentViewDTOS2.push(table3.name);
        });
      });

      return componentViewDTOS2.filter((v, i, a) => a.indexOf(v) === i);
    }

    function getValues(table, name) {  // imi ia valorile pe componenta

      const componentViewDTOS1 = [];
      const componentViewDTOS2 = [];
      table.forEach(table1 => {
        if (name === table1.componentName) {
          componentViewDTOS1.push(table1.componentViewDTOS);
        }
      });
      componentViewDTOS1.forEach(table2 => {
        table2.forEach(table3 => {
          componentViewDTOS2.push(table3.value);
        });
      });
      return componentViewDTOS2;
    }

    function getNamesPerComponent(table, name) {

      const componentViewDTOS1 = [];
      const componentViewDTOS2 = [];
      table.forEach(table1 => {
        if (name === table1.componentName) {
          componentViewDTOS1.push(table1.componentViewDTOS);
        }
      });
      componentViewDTOS1.forEach(table2 => {
        table2.forEach(table3 => {
          componentViewDTOS2.push(table3.name);
        });
      });
      return componentViewDTOS2;
    }

    // function getIndependentValues(table) {
    //
    //   const componentViewDTOS1 = [];
    //   const componentViewDTOS2 = [];
    //   table.forEach(table1 => {{componentViewDTOS1.push(table1.componentViewDTOS); } });
    //   componentViewDTOS1.forEach(table2 => {table2.forEach(table3 => {componentViewDTOS2.push(table3.value); }); });
    //
    //   return componentViewDTOS2;
    // }

    // function createColumn(i= 0, table) {
    //   const column = [];
    //   while (i < getIndependentValues(table).length) {
    //     column.push(getIndependentValues(table)[i]);
    //     i = i + 17;
    //   }
    //   return column;
    // }

    // for (let i = 0 ; i < getNames(this.table).length; i++) {
    //     this.propertyValuesMap.set(getNames(this.table)[i], createColumn(i, this.table));
    //   }
    // console.log(this.propertyValuesMap);  // proprietate -> valori Total Severity Score -> [3, 7]

    function getComponent(table) {
      const nameComponent = [];
      table.forEach(table3 => {
        nameComponent.push(table3.componentName);
      });
      return nameComponent;
    }

    for (const c of getComponent(this.table)) {
      this.componentValuesMap.set(c, getValues(this.table, c));
      this.propertyValueMap.set(getNamesPerComponent(this.table, c), getValues(this.table, c));
      console.log(getValues(this.table, c));
    }

    this.properties = getNames(this.table); // toate headerele
    this.components = getComponent(this.table); // toate componentele
    this.qaValuesArray = Array.from(this.componentValuesMap.values()); // toate valorile QA-urilor
    this.valuesArray = Array.from(this.componentValuesMap.keys());
    this.doubleMap.set(this.valuesArray, this.propertyValueMap);

    console.log(this.doubleMap);
  }
}
