import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchMasterComponent } from './batch-master/batch-master.component';
import { CampTypeComponent } from './camp-type/camp-type.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { ParticipantsTypeComponent } from './participants-type/participants-type.component';
import { VolunteerMasterAddComponent } from './volunteer-master-add/volunteer-master-add.component';
import { VolunteerMasterComponent } from './volunteer-master/volunteer-master.component';

const routes: Routes = [
  {
    path: 'camp-type',
    component: CampTypeComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampRoutingModule { }
