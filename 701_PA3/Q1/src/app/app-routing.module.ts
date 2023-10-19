import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C5Component } from './c5/c5.component';
import { C4Component } from './c4/c4.component';
const routes: Routes = [
  {path:'C1',component:C1Component},
  {path:'C2',component:C2Component},
  {path:'C3',component:C3Component},
  {path:'C4',component:C4Component},
  {path:'C5',component:C5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
