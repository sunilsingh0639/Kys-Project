import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RenewRoutingModule } from './renew-routing.module';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscriberTypeComponent } from './subscriber-type/subscriber-type.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    SubscribeComponent,
    SubscriberTypeComponent,
    PersonalInformationComponent,
    ChoosePlanComponent,
    ConfirmationComponent,

  ],
  imports: [
    CommonModule,
    RenewRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RenewModule { }
