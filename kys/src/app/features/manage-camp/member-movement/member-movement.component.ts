import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberMasterService } from 'src/app/core/services/member-master.service';
import { VolunteerMasterService } from 'src/app/core/services/volunteer-master.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-member-movement',
  templateUrl: './member-movement.component.html',
  styleUrls: ['./member-movement.component.scss']
})
export class MemberMovementComponent {



  memberMovementForm!: FormGroup
  allCamps: any
  selectedMemberIds: any;
  selectedCamp: any;
  selectedCampId: any;
  allVolunteers: any;
  allMembers: any;
  camps: any[] = [];
  members: any[] = [];


  constructor(private fb: FormBuilder, private volunteerService: VolunteerMasterService,
    private memberService: MemberMasterService) {
    this.memberMovementForm = this.fb.group({
      type: ['', [Validators.required]],
      campid: ['', [Validators.required]]
    })


    this.memberMovementForm.controls['type'].valueChanges
      .subscribe((res) => {
        if (this.memberMovementForm.controls['type'].value == "member") {
          this.getCampIdList();
          this.getMembers();
          this.changedMembersToCamps();
        }
        else if (this.memberMovementForm.controls['type'].value == "volunteer") {
          this.getVolunteers();
          this.getCampIdList();
          this.changedVolunteersToCamps();
        }
      });
      
      this.memberMovementForm.controls['campid'].valueChanges
        .subscribe((res) => {
          this.selectedCampId = res
          let camp = this.allCamps?.data.find((item: any) => {
            return item.id == res
          })
          this.selectedCamp = camp.id + '-' + camp.city + '-' + camp.dist + '-' + camp.state + '-' + camp.year
          if((this.memberMovementForm.controls['type'].value == "member")){
            this.changedMembersToCamps();
          }else if (this.memberMovementForm.controls['type'].value == "volunteer"){
            this.changedVolunteersToCamps();
          }
        });

  }

  changedVolunteersToCamps() {
    this.volunteerService.getMemberIdByCampIds(this.memberMovementForm.controls['campid'].value)
      .subscribe(res => {
        this.selectedMemberIds = res
        this.members = this.allVolunteers?.data.filter((res: any) => this.selectedMemberIds?.data[0]?.vIds.indexOf(res.vId) == -1);
        this.camps = this.allVolunteers?.data.filter((res: any) => this.selectedMemberIds?.data[0]?.vIds.indexOf(res.vId) > -1);
      })
  }

  changedMembersToCamps() {
    this.volunteerService.getMemberIdByCampIds(this.memberMovementForm.controls['campid'].value)
      .subscribe(res => {
        this.selectedMemberIds = res
        this.members = this.allMembers?.data.filter((res: any) => this.selectedMemberIds?.data[0]?.memberIds.indexOf(res.vId) == -1);
        this.camps = this.allMembers?.data.filter((res: any) => this.selectedMemberIds?.data[0]?.memberIds.indexOf(res.vId) > -1);
      })
  }


  getVolunteers() {
    this.volunteerService.isVolunteerList()
      .subscribe((res: any) => {
        console.log(res)
        this.allVolunteers = res
      })
  }

  getMembers() {
    this.memberService.getMemberMasterList()
      .subscribe(res => {
        console.log(res)
        this.allMembers = res
      })
  }

  getCampIdList() {
    this.volunteerService.getCampIdList()
      .subscribe(response => {
        console.log(response)
        this.allCamps = response
      })
  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


  addToCamp() {
    if (this.memberMovementForm.value.type == 'volunteer') {
      let body = {
        campId: this.memberMovementForm.value.campid,
        memberId: this.camps.map((item: any) => { return item.vId })
      }
      this.volunteerService.addVolunteerstoCamp(body)
        .subscribe(res => {
        })
    }
    else if (this.memberMovementForm.value.type == 'member') {
      let body = {
        campId: this.memberMovementForm.value.campid,
        memberId: this.camps.map((item: any) => { return item.vId })
      }
      this.volunteerService.addMemberstoCamp(body)
        .subscribe(res => {
        })
    }
  }

}
