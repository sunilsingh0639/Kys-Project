import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageCampRoutingModule } from './manage-camp-routing.module';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { BatchMasterComponent } from './batch-master/batch-master.component';
import { CampTypeComponent } from './camp-type/camp-type.component';
import { ParticipantsTypeComponent } from './participants-type/participants-type.component';
import { VolunteerMasterAddComponent } from './volunteer-master-add/volunteer-master-add.component';
import { VolunteerMasterComponent } from './volunteer-master/volunteer-master.component';
import { CampMasterComponent } from './camp-master/camp-master.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MemberMasterComponent } from './member-master/member-master.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberMovementComponent } from './member-movement/member-movement.component';


@NgModule({
  declarations: [
    EditVolunteerComponent,
    BatchMasterComponent,
    CampTypeComponent,
    ParticipantsTypeComponent,
    VolunteerMasterAddComponent,
    VolunteerMasterComponent,
    CampMasterComponent,
    MemberMasterComponent,
    EditMemberComponent,
    AddMemberComponent,
    MemberMovementComponent
  ],
  imports: [
    CommonModule,
    ManageCampRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class ManageCampModule { }
