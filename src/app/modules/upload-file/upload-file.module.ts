import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularFontAwesomeModule
  ],
  exports:[
    UploadFileComponent
  ]
})
export class UploadFileModule { }
