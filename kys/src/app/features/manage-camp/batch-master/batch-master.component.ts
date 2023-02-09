import { Component, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BatchMasterService } from 'src/app/core/services/batch-master.service';



export interface BatchMasterTable {
  batchId: number;
  campNumber: string;
  createDate: string;
  count: number;
}



@Component({
  selector: 'app-batch-master',
  templateUrl: './batch-master.component.html',
  styleUrls: ['./batch-master.component.scss']
})
export class BatchMasterComponent {

  @ViewChild('paginator') paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>

  batchMasterForm!: FormGroup;
  myGroup!: FormGroup;
  allBatchMaster: any
  allCampMaster: any
  allCampIds: any
  selectedBatchMasterId: string = '';
  displayedColumns: string[] = ['batchId', 'campNumber', 'createDate', 'count', 'action']

  constructor(private fb: FormBuilder, private batchMasterService: BatchMasterService) {
    this.batchMasterForm = this.fb.group({
      batchId: ["", [Validators.required]],
      campNumber: ["", [Validators.required]],
      count: ["", [Validators.required]],
      createDate: ["", [Validators.required]],
    })
  }
  get form(){
    return this.batchMasterForm.controls
  }

  ngOnInit(): void {
    this.getCampIdList();
    this.getBatchMasterList();
    this.getCampMasterList();
  }


  getCampIdList() {
    this.batchMasterService.getCampIdList()
      .subscribe((res: any) => {
        console.log(res);
        this.allCampIds = res;
      })
  }

  getCampMasterList(): void {
    this.batchMasterService.getCampMasterList()
      .subscribe(res => {
        this.allCampMaster = res
        console.log(res)
      })
  }

  getBatchMasterList(): void {
    this.batchMasterService.getBatchMasterList()
      .subscribe(res => {
        this.allBatchMaster = res
        this.dataSource = new MatTableDataSource(this.allBatchMaster?.data);
        this.dataSource.paginator = this.paginator
        console.log(res)
        this.allBatchMaster?.data.forEach((element: any) => {
          // console.log(element.campId)
          let camp = this.allCampIds?.data.find((item: any) => {
            return element.campId === item.id
          })
          // console.log(camp)
          if (camp && camp.city && camp.dist && camp.state && camp.year) {
            element.displayCamp = camp.city + '-' + camp.dist + '-' + camp.state + '-' + camp.year
          }
          else {
            element.displayCamp = "No Camp Found"
          }
        });
      })
  }



  /// edit
  editSelected: any
  editBatchMaster(i: number) {
    this.getCampIdList();
    this.editSelected = i
    const batch_id = this.allBatchMaster?.data[this.editSelected]._id;
    this.batchMasterService.editBatchMaster(batch_id)
      .subscribe((res: any) => {
        let campid = res?.data.campId
        let camp = this.allCampIds?.data.find((item: any) => {
          return item.id === campid
        })
        let patchCamp = camp.id + '-' + camp.city + '-' + camp.dist + '-' + camp.state + '-' + camp.year
        const selectedDate = new Date(res?.data.createDate)
        this.batchMasterForm.patchValue({
          batchId: res?.data.batchId,
          count: res?.data.count,
          createDate: this.formatDate(selectedDate),
          campNumber: patchCamp
        })
      })
  }
  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
  //// new book addding
  resetForm() {
    this.batchMasterForm.reset();
  }
  addBatchMaster() {
    if (this.editSelected != null) {
      let batchid = this.allBatchMaster?.data[this.editSelected]._id
      let fdate = this.formatDate(this.batchMasterForm.value.createDate)
      let date = new Date(fdate)
      let campN = (this.batchMasterForm.value.campNumber)
      let camp = this.allCampMaster?.data.find((item: any) => {
        return item.id + '-' + item.city + '-' + item.dist + '-' + item.state + '-' + item.year == campN
      })
      const editBatchMaster = {
        batchId: this.batchMasterForm.value.batchId,
        campId: Number(camp.id),
        createDate: date.getTime(),
        count: this.batchMasterForm.value.count,
        _id: batchid,
      }
      this.batchMasterService.addNewBatchMaster(editBatchMaster)
        .subscribe((res: any) => {
          console.log(res);
          this.editSelected = null;
          this.getBatchMasterList();
          this.getCampMasterList();
        })
    }
    else {
      this.getCampIdList();
      let campN = (this.batchMasterForm.value.campNumber)
      let camp = this.allCampMaster?.data.find((item: any) => {
        return item.id + '-' + item.city + '-' + item.dist + '-' + item.state + '-' + item.year == campN
      })
      console.log(camp)
      let date = new Date(this.batchMasterForm.value.createDate)
      const newBatchMaster = {
        batchId: this.batchMasterForm.value.batchId,
        campId: Number(camp.id),
        createDate: date.getTime(),
        count: this.batchMasterForm.value.count,
      }
      this.batchMasterService.addNewBatchMaster(newBatchMaster)
        .subscribe((res: any) => {
          console.log(res);
          this.getBatchMasterList();
          this.getCampMasterList();
        })
    }
    this.batchMasterForm.reset();
  }


  /// delete
  deleteBatchMaster() {
    this.batchMasterService.deleteBatchMaster(this.selectedBatchMasterId)
      .subscribe((res: any) => {
        console.log(res)
        this.getBatchMasterList();
        this.getCampMasterList();
      })
  }

  sortedData: any
  ///////////////// ////////////////////  sorting
  sortData(sort: Sort) {
    if (!sort.active || sort.direction === '') {
      this.sortedData = this.allBatchMaster.data;
      return;
    }
    this.sortedData = this.allBatchMaster.data.sort((a: any, b: any) => {
      let isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'batchId':
          return compare(a.batchId, b.batchId, isAsc);
        case 'createDate':
          return compare(a.createDate, b.createDate, isAsc);
        case 'count':
          return compare(a.count, b.count, isAsc);
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


