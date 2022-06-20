import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertNumberComponent } from './components/convert-number/convert-number.component';
import { SumNumberComponent } from './components/sum-number/sum-number.component';

const routes: Routes = [
  {path:'convert', component: ConvertNumberComponent},
  {path:'sum', component: SumNumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
