import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataByDatesComponent } from './components/data-by-dates/data-by-dates.component';
import { DisplayDataComponent } from './components/displayDataAll/display-data/display-data.component';
import { CalculateFoodDataComponent } from './components/calculate-food-data/calculate-food-data.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},

  {
    path:'datePage',
    component:DataByDatesComponent
  },
  {
    path:'showData',
    component:DisplayDataComponent
  },
  {
    path:'calcData',
    component:CalculateFoodDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
