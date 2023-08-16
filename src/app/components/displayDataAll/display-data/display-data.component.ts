import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { basicCalcModel } from 'src/app/model/basicCalcModel';
import { BasiccalcservicesService } from 'src/app/services/basiccalcservices.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  public Data:basicCalcModel[] =[];

  displayedColumns: string[] = ['id','every_Date','breakfast','tea_flag','tea','lunch','dinner','banana_flag','banana','water_Bottle_flag','water_Bottle','remarks'];
  datasource: any;

  constructor(private _service:BasiccalcservicesService) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this._service.showAllData().subscribe(
      (data:any)=>{
        // this.datasource = new MatTableDataSource<basicCalcModel>(data);
        this.datasource = new MatTableDataSource<basicCalcModel>(data);
        if(this._service.dataSource != null)
        {
          this.datasource = this._service.dataSource
        }
        this.datasource.paginator =  this.paginator;
        // this._service.dataSource.paginator =  this.paginator;
      },(err)=>{
      console.error(err);
    });
  }

  /*ngAfterViewInit() {

  }*/

}

