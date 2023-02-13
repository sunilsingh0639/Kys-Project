import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { BatchMasterComponent } from './batch-master/batch-master.component';
import { CampMasterComponent } from './camp-master/camp-master.component';
import { CampTypeComponent } from './camp-type/camp-type.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { MemberMasterComponent } from './member-master/member-master.component';
import { MemberMovementComponent } from './member-movement/member-movement.component';
import { ParticipantsTypeComponent } from './participants-type/participants-type.component';
import { VolunteerMasterAddComponent } from './volunteer-master-add/volunteer-master-add.component';
import { VolunteerMasterComponent } from './volunteer-master/volunteer-master.component';

const routes: Routes = [
  {
    path: 'camp-type',
    component: CampTypeComponent
  },
  {
    path : 'camp-master',
    component: CampMasterComponent
  },
  {
    path: 'participantsType',
    component: ParticipantsTypeComponent
  },
  {
    path: 'batchMaster',
    component: BatchMasterComponent
  },
  {
    path: 'voluteer-master',
    component: VolunteerMasterComponent
  },
  {
    path: 'VolunteersMasterAdd',
    component: VolunteerMasterAddComponent
  },
  {
    path: 'edit-voluteer',
    component: EditVolunteerComponent
  },
  {
    path: 'member-master',
    component: MemberMasterComponent
  },
  {
    path: 'edit-member',
    component: EditMemberComponent
  },
  {
    path: 'add-member',
    component: AddMemberComponent
  },
  {
    path: 'member-movement',
    component: MemberMovementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampRoutingModule { }
