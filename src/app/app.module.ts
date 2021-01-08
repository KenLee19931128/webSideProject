import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CaseReqService } from './service/case-req.service';
import { CaseReqComponent } from './case-req/case-req.component';
import { CaseInsertComponent } from './case-insert/case-insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidSelectedDirective } from './validation/valid-selected.directive';
import { ErrorHandlingService } from './service/errorHandlingService.service'
@NgModule({
  declarations: [
    CaseReqComponent,
    AppComponent,
    CaseInsertComponent,
    ValidSelectedDirective
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CaseReqService , {provide: ErrorHandler, useClass: ErrorHandlingService}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
