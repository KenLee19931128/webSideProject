import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseReqComponent } from './case-req.component';

describe('CaseReqComponent', () => {
  let component: CaseReqComponent;
  let fixture: ComponentFixture<CaseReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
