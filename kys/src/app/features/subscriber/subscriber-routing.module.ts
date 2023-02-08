import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SubscriberComponent } from './subscriber/subscriber.component';


const routes: Routes = [
  {
    path: '',
    component: SubscriberComponent
  },
  {
    path: 'user',
    component: ProfileComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriberRoutingModule { }
