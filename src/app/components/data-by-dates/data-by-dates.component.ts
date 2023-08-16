import { Component, OnInit,ViewChild } from '@angular/core';
import { datesModel } from 'src/app/model/datesModel';
import { BasiccalcservicesService } from 'src/app/services/basiccalcservices.service';
import {MatTableDataSource} from '@angular/material/table';
import { basicCalcModel } from 'src/app/model/basicCalcModel';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-data-by-dates',
  templateUrl: './data-by-dates.component.html',
  styleUrls: ['./data-by-dates.component.css']
})
export class DataByDatesComponent implements OnInit {

  datesObj:datesModel = new datesModel('','');
  public val:any;
  datasource: any;
  displayedColumns: string[] = ['id','every_Date','breakfast','tea_flag','tea','lunch','dinner','banana_flag','banana','water_Bottle_flag','water_Bottle','remarks'];

  constructor(private _service:BasiccalcservicesService, private router:Router) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {

  }

  public onSubmit()
  {
    this._service.showDataByDates(this.datesObj).subscribe((data:any)=>{
      this._service.dataSource = new MatTableDataSource<basicCalcModel>(data);
      console.log(data);
      this.router.navigate(['/showData'])
    });
  }

}
