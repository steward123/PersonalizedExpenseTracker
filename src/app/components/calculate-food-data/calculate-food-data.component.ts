import { Component, OnInit } from '@angular/core';
import { datesModel } from 'src/app/model/datesModel';
import { BasiccalcservicesService } from 'src/app/services/basiccalcservices.service';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-calculate-food-data',
  templateUrl: './calculate-food-data.component.html',
  styleUrls: ['./calculate-food-data.component.css']
})
export class CalculateFoodDataComponent implements OnInit {

  datesObj:datesModel = new datesModel('','');
  public val:any;

  constructor(private _service:BasiccalcservicesService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public onSubmit()
  {
    this._service.calcDataByDates(this.datesObj).subscribe((data:any)=>{
      this.val = data;
      this._snackBar.open('Monthly Food Expense is : ₹'+this.val+'.00','Ok');
    });
  }


}
