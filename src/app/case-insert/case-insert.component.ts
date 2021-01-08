import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators , AbstractControl , FormBuilder } from '@angular/forms';
import { CaseReqService } from '../service/case-req.service';
import { selectedValidator } from '../validation/valid-selected.directive';


@Component({
  selector: 'app-case-insert',
  templateUrl: './case-insert.component.html',
  styleUrls: ['./case-insert.component.css']
})
export class CaseInsertComponent implements OnInit {

  // createForm = new FormGroup({
  //   caseNo : new FormControl(),
  //   monitorLevel : new FormControl(),
  //   type : new FormControl(),
  //   managerEmp : new FormControl(),
  //   contactEmp : new FormControl(),
  //   start : new FormControl(),
  //   end : new FormControl(),
  //   workItemDesc : new FormControl()
  // });


  createForm! : FormGroup;

  // monitorLevel = '';

  // type = '';

  // managerEmp = '';

  // contactEmp = '';

  employees = [
    {empId: 'FDC1101' , name: '陳小明'},
    {empId: 'FDC2101' , name: '菜阿花'},
    {empId: 'FDC2201' , name: '王大明'},
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


  constructor(private caseReqService: CaseReqService , private fb: FormBuilder) {
      this.getForm();
   }

   getForm(){
    this.createForm = this.fb.group({
      caseNo: ['', [Validators.required, Validators.minLength(10)]],
      monitorLevel: ['',[Validators.required,selectedValidator]],
      type: ['',[Validators.required,selectedValidator]],
      managerEmp: ['',[Validators.required,selectedValidator]],
      contactEmp: ['',[Validators.required,selectedValidator]],
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      workItemDesc: ['', [Validators.required]]
    });
    this.test();
   }


   //這個是拿來測試patchValue
   test(){
    const test$ = this.createForm.get('caseNo');
    test$?.valueChanges.subscribe( e => {
        if(e === '55688'){
          this.createForm.patchValue({
            caseNo : e+'台灣大車隊'
          })
        }
    });
   }

   reset(){
     this.createForm.reset();
   }


  ngOnInit(): void {
  }


  showAlert(){

    for(const i in this.createForm.controls){
      this.createForm.controls[i].markAsDirty();
      this.createForm.controls[i].updateValueAndValidity();
      if(!(this.createForm.controls[i].status == 'VALID') &&  this.createForm.controls[i].status !== 'DISABLED' ){
        return ;
      }
    }



    // let params: any = {};
    // // tslint:disable-next-line:forin
    // for (const i in this.createForm.controls){
    //   let params2: any = {};
    //   if(this.createForm.controls[i] && this.createForm.controls[i].value){
    //     if(i === 'contactEmp'){
    //       params2['empId'] = this.createForm.controls[i].value  ;
    //       params[i] = params2;
    //       console.log(i +  '      ' + params);
    //       console.log('12312323123');
    //     }else if(i === 'managerEmp'){
    //       params2['empId'] = this.createForm.controls[i].value  ;
    //       params[i] = params2;
    //     }else{
    //       params[i] = this.createForm.controls[i].value;
    //     }
    //   }else{
    //     params[i] = '';
    //   }
    // }

    // this.caseReqService.insert(params);

  }

  get form(): { [key: string]: AbstractControl; } { return this.createForm.controls; }








}
