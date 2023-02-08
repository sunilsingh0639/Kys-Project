import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VolunteerMasterService } from 'src/app/core/services/volunteer-master.service';


export interface BatchMasterTable {
  fullName: string;
  dob: string;
  city: string;
  district: string;
  age: number;
  mobile: number;
  vId: number;
  count: number;
}

@Component({
  selector: 'app-volunteer-master',
  templateUrl: './volunteer-master.component.html',
  styleUrls: ['./volunteer-master.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class VolunteerMasterComponent {


  isValid: boolean = true
  allisVolunteer: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>
  displayedColumns: string[] = ['vId', 'fullName', 'dob', 'age', 'mobile', 'city', 'district', 'count', 'batch']
  expandedElement: any
  columnsToDisplayWithExpand: string[] = [...this.displayedColumns, 'expand']
  selectedVolunteerData: any;


  constructor(private volunteerService: VolunteerMasterService) {
    this.isVolunteerList();
  }

  isVolunteerList() {
    this.volunteerService.isVolunteerList(this.isValid)
      .subscribe((res: any) => {
        console.log(res)
        this.allisVolunteer = res
        this.expandedElement = this.allisVolunteer?.data
        this.dataSource = new MatTableDataSource(this.allisVolunteer?.data);
        this.dataSource.paginator = this.paginator
      })
  }

  editVolunteer(i: number) {
    this.volunteerService.editVolunteerDetails(this.allisVolunteer?.data[i]._id)
      .subscribe(res => {
        // console.log(res)
        this.selectedVolunteerData = res
        this.volunteerService.setVolunteerData(this.selectedVolunteerData)
      })
  }


sortedData: any
////////////////////////////////////  sorting
sortData(sort: Sort) {
  if (!sort.active || sort.direction === '') {
    this.sortedData = this.allisVolunteer.data;
    return;
  }
  this.sortedData = this.allisVolunteer.data.sort((a: any, b: any) => {
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
}


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}