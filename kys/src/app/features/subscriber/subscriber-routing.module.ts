import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { subscriberComponent } from './subscriber/subscriber.component';


const routes: Routes = [
  {
    path: '',
    component: subscriberComponent
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
