import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasiccalcservicesService {

  public baseUrl:string =  'http://localhost:8082/';
  public dataSource:any;
  constructor(private _client:HttpClient) { }

  public showAllData()
  {
    return this._client.get(this.baseUrl+'bill/show/');
  }

  public showDataByDates(datesObj:any):any
  {
    return this._client.post(this.baseUrl+'bill/showByMonth/',datesObj);
  }

  public calcDataByDates(datesObj:any):any
  {
    return this._client.post(this.baseUrl+'bill/CalcByMonth/',datesObj);
  }
}
