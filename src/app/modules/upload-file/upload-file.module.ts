import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports:[
    UploadFileComponent
  ]
})
export class UploadFileModule { }
