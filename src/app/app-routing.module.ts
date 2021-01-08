import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseInsertComponent } from './case-insert/case-insert.component';
import { CaseReqComponent } from './case-req/case-req.component';
const routes: Routes = [
  {path: 'create' , component: CaseInsertComponent},
  {path: 'search' , component: CaseReqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
