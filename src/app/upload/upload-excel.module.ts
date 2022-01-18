import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { UploadExcelComponent } from './upload-excel/upload-excel.component';


@NgModule({
  declarations:[
    UploadExcelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : '', component:UploadExcelComponent}
    ])
  ]
})
export class UploadExcelModule{}
