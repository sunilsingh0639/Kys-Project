import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MngaddressComponent } from './mngaddress/mngaddress.component';


const routes: Routes = [
  {
    path: '',
    component: MngaddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
