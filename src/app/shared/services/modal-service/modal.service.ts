import { Injectable } from "@angular/core";
import { BsModalRef, ModalOptions, BsModalService } from "ngx-bootstrap/modal";
import { UploadImageModalComponent } from "../../components/modal/upload-image-modal/upload-image-modal.component";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ModalService {
  bsModalRef: BsModalRef;
  config: ModalOptions = {
    class: "modal-dialog-centered",
    keyboard: false,
    focus: true,
    backdrop: true,
    ignoreBackdropClick: true,
  };

  constructor(private readonly bsModalService: BsModalService) {}

  showUploadImageModal(): Observable<string> {
    this.bsModalRef = this.bsModalService.show(
      UploadImageModalComponent,
      this.config
    );
    return this.bsModalRef.content.imageUpload;
  }
}
