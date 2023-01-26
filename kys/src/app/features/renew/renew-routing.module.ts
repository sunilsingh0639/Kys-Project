import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriberTypeComponent } from './subscriber-type/subscriber-type.component';


const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent
  },
  {
    path: "choose-plan",
    component: ChoosePlanComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'subscriber-type',
    component: SubscriberTypeComponent
  },
  {
    path: 'personal-information',
    component: PersonalInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenewRoutingModule { }
