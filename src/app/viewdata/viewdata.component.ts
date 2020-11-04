import { Component, OnInit, ViewChild } from '@angular/core';
import { TabledataService } from 'app-services/Tabledata.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent implements OnInit {

  constructor(private tabledataservice:TabledataService) { }

  tabledata: any;
  @ViewChild('dt') table: Table;

  ngOnInit(): void {

    console.log('viewdata came');

    this.tabledataservice.getTableData().subscribe(result => {
      console.log('result came');

      this.tabledata = result;
      console.log(this.tabledata);

    })

  }

}
