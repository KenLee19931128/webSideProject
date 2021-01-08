import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  map,
  mapTo,
  take,
  takeLast,
  skip,
  skipLast,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  merge
} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CaseReqService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:9090/oa/caseReqApi/test');
  }

  insert(caseReq: any){
    console.log('insert function' + caseReq);

    this.http.post('//localhost:9090/oa/caseReqApi/doCreate', caseReq).subscribe();
  }
}



