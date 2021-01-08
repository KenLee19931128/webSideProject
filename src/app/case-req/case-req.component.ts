import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { catchError, filter, map } from 'rxjs/operators';
import { CaseReqService } from '../service/case-req.service';

@Component({
  selector: 'app-case-req',
  templateUrl: './case-req.component.html',
  styleUrls: ['./case-req.component.css']
})
export class CaseReqComponent implements OnInit {

  errorMsg:string = '';

  caseReqList = null;

   monitorLevel = '';

   type = '';

   managerEmp = '';

   contactEmp = '';

  CaseTypeEnum: typeof CaseTypeEnum | any = CaseTypeEnum;

  CaseMonitorLevelEnum: typeof CaseMonitorLevelEnum | any = CaseMonitorLevelEnum;

  units = [
    {id: 'FDC1100' , name: '主秘室'},
    {id: 'FDC2100' , name: '第一組'},
    {id: 'FDC2200' , name: '第二組'},
  ];

  CaseType = [
    {id: 'General' , name: '總綱目'},
    {id: 'TempControl' , name: '臨時列管'},
    {id: 'NoControl' , name: '非列管(原A類案件)'},
  ];

  CaseMonitorLevel = [
    {id: 'ReportForControl' , name: '報部列管'},
    {id: 'DeptControl' , name: '科室列管'},
    {id: 'BureauControl' , name: '局列管'},
    {id: 'NoControl' , name: '不列管'},
  ];
  constructor(private caseReqService: CaseReqService) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  onMonitorLevelChange(event: any){
    this.monitorLevel = event.target.value;
  }

   // tslint:disable-next-line:typedef
  onTypeChange(event: any){
    this.type = event.target.value;
  }

  onManagerEmpChange(event: any){
    this.managerEmp = (<HTMLInputElement>event.target).value;
  }

  onContactEmpChange(event: any){
    this.contactEmp = event.target.value;
  }

  //2021/1/7 加上簡易錯誤處理
  doSearch(){
    this.caseReqService.getAll().pipe(catchError( (e : HttpErrorResponse) => {
      if(e.status == 0){
        // this.errorMsg = '伺服器發生錯誤';
        // throwError("1234");
        throw e;
      }
      return of(null);
    } )).subscribe(data => {
      this.caseReqList = data;
    });
  }


  doCreate(){

  }


}

enum CaseTypeEnum{
'Default_all' = '請選擇' ,
'General' = '總綱目',
'TempControl' = '臨時列管',
'NoControl' = '非列管(原A類案件)'
}


enum CaseMonitorLevelEnum{
  Default_all = '請選擇',
ReportForControl = '報部列管',
DeptControl = '科室列管',
BureauControl = '局列管',
NoControl = '不列管'
}
