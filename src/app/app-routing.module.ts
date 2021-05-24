import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterOutputCardComponent } from './converter-output-card/converter-output-card.component';
import { RecentConversionsComponent } from './recent-conversions/recent-conversions.component';

const routes: Routes = [
  {
    path:'',
    component: ConverterOutputCardComponent
  },
  {
    path:'recent-conversions',
    component: RecentConversionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
