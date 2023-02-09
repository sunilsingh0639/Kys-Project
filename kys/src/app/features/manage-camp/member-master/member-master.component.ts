import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MemberMasterService } from 'src/app/core/services/member-master.service';



export interface MemberMasterTable {
  fullName: string;
  dob: string;
  city: string;
  district: string;
  age: number;
  mobile: number;
  vId: number;
}


@Component({
  selector: 'app-member-master',
  templateUrl: './member-master.component.html',
  styleUrls: ['./member-master.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class MemberMasterComponent {

 

  allMemberMaster: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>
  displayedColumns: string[] = ['vId', 'fullName', 'dob', 'age', 'mobile', 'city', 'district']
  expandedElement: any
  columnsToDisplayWithExpand: string[] = [...this.displayedColumns, 'expand']
  selectedMemberMasterData: any;


  constructor(private memberMasterService: MemberMasterService) {
    this.getMemberMasterList();
  }

  getMemberMasterList() {
    this.memberMasterService.getMemberMasterList()
      .subscribe((res: any) => {
        console.log(res)
        this.allMemberMaster = res
        this.expandedElement = this.allMemberMaster?.data
        this.dataSource = new MatTableDataSource(this.allMemberMaster?.data);
        this.dataSource.paginator = this.paginator
      })
  }

  editMemberMaster(i: number) {
    this.memberMasterService.editMemberDetails(this.allMemberMaster?.data[i]._id)
      .subscribe(res => {
        this.selectedMemberMasterData = res
        this.memberMasterService.setMemberMasterData(this.selectedMemberMasterData)
      })
  }

sortedData: any
////////////////////////////////////  sorting
sortData(sort: Sort) {
  if (!sort.active || sort.direction === '') {
    this.sortedData = this.allMemberMaster.data;
    return;
  }
  this.sortedData = this.allMemberMaster.data.sort((a: any, b: any) => {
    let isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'fullName':
        return compare(a.firstName, b.firstName, isAsc);
      case 'dob':
        return compare(a.dob, b.dob, isAsc);
      case 'age':
        return compare(a.age, b.age, isAsc);
      default:
        return 0;
    }
  });
  this.dataSource = new MatTableDataSource(this.sortedData);
  this.dataSource.paginator = this.paginator
}


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
