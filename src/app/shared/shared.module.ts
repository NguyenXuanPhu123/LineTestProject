import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { UploadImageModalComponent } from "./components/modal/upload-image-modal/upload-image-modal.component";
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";
import { ModalService } from "./services/modal-service/modal.service";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { DragDropCustomDirective } from './directives/drag-drop-custom.directive';

@NgModule({
  declarations: [
    DatePickerComponent,
    TimePickerComponent,
    UploadImageModalComponent,
    DragDropCustomDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
  ],
  providers: [ModalService, BsModalRef],
  exports: [
    DatePickerComponent,
    TimePickerComponent,
    UploadImageModalComponent,
    ModalModule,
  ],
  entryComponents: [UploadImageModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
