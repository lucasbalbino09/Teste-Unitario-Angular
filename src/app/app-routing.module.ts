import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestandoComponent } from './testando/testando.component';

const routes: Routes = [
  {path:'',component:TestandoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
