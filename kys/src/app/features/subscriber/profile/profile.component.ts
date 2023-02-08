import { Component } from '@angular/core';
import { SubscriberService } from 'src/app/core/services/subscriber.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private service: SubscriberService) {
    this.gettingPlanList()
    this.gettingStateList()
    this.bntStyle = 'btn-default';
  }
  planList: any
  stateList: any
  bntStyle!: string



  selectedUserData: any
  activeData: any[] = []
  inactiveData: any[] = []
  ngOnInit() {

    this.service.getData()
      .subscribe((res: any) => {
        // console.log(res)
        this.selectedUserData = res;
        this.showData();
        // console.log(this.activeData)
      })
  }

  showData() {
    this.activeData = this.selectedUserData?.data.subcriptions.filter((res: any) => res.active == true);
    this.bntStyle = 'btn-default';
  }
  noData() {
    this.activeData = this.selectedUserData?.data.subcriptions.filter((res: any) => res.active == false);
    this.bntStyle = 'btn-change';
  }

  gettingPlanList() {
    this.service.getPlan_List()
      .subscribe((res: any) => {
        // console.log(res)
        this.planList = res
        // console.log(this.PlanList)
      })
  }

  gettingStateList() {
    this.service.getState_List()
      .subscribe((res: any) => {
        // console.log(res)
        this.stateList = res
      })
  }
}
