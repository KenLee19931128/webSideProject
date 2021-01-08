import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseInsertComponent } from './case-insert.component';

describe('CaseInsertComponent', () => {
  let component: CaseInsertComponent;
  let fixture: ComponentFixture<CaseInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
