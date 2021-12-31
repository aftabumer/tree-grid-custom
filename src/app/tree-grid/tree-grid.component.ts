import { Component, OnInit } from '@angular/core';
import { customerData } from '../jsontreegriddata';
import {
  EditService,
  ToolbarService,
  PageService,
  ColumnChooserService,
} from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss'],
  providers: [
    ToolbarService,
    EditService,
    PageService,
    PageService,
    ColumnChooserService,
    ToolbarService,
  ],
})
export class TreeGridComponent implements OnInit {
  constructor() {}

  public data: Object[] = [];
  public editSettings!: Object;
  public toolbar!: string[];
  public pageSettings!: Object;
  public editParams!: Object;
  public customerID!: Object;
  public customerName!: Object;
  public customerEmail!: Object;
  public customerPhone!: Object;
  public customerAddress!: Object;

  // @ViewChild('treegrid')
  // public treegrid!: TreeGridComponent;

  ngOnInit(): void {
    this.data = customerData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
      newRowPosition: 'center',
    };

    // this.filterSettings = {
    //   type: 'FilterBar',
    //   hierarchyMode: 'Parent',
    //   mode: 'Immediate',
    // };
    // this.templateOptions = {
    //   create: (args: { element: Element }) => {
    //     let dd: HTMLInputElement = document.createElement('input');
    //     dd.id = 'duration';
    //     return dd;
    //   },
    //   write: (args: { element: Element }) => {
    //     let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
    //     this.dropDownFilter = new DropDownList({
    //       dataSource: dataSource,
    //       value: 'All',
    //       change: (e: ChangeEventArgs) => {
    //         let valuenum: any = +e.value;
    //         let id: any = <string>this.dropDownFilter.element.id;
    //         let value: any = <string>e.value;
    //         if (value !== 'All') {
    //           this.treegrid.filterByColumn(id, 'equal', valuenum);
    //         } else {
    //           this.treegrid.removeFilteredColsByField(id);
    //         }
    //       },
    //     });
    //     this.dropDownFilter.appendTo('#duration');
    //   },
    // };
    // this.fields1 = { text: 'mode', value: 'id' };
    // this.d1data = [
    //   { id: 'Parent', mode: 'Parent' },
    //   { id: 'Child', mode: 'Child' },
    //   { id: 'Both', mode: 'Both' },
    //   { id: 'None', mode: 'None' },
    // ];

    this.toolbar = ['Add', 'Edit', 'Delete', 'ColumnChooser'];
    this.pageSettings = { pageCount: 10 };
    this.editParams = { params: { format: 'n' } };
    this.customerName = { required: true };
    this.customerID = { required: true };
    this.customerEmail = { email: true };
    this.customerPhone = { number: true };
    this.customerAddress = { required: true };
  }

  // change(e: ChangeEventArgs): void {
  //   let mode: any = <string>e.value;
  //   this.treegrid.filterSettings.hierarchyMode = mode;
  //   this.treegrid.clearFiltering();
  //   this.dropDownFilter.value = 'All';
  // }
}
