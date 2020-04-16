import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { FileHandle } from "src/app/shared/directives/drag-drop-custom.directive";

@Component({
  selector: "app-upload-image-modal",
  templateUrl: "./upload-image-modal.component.html",
  styleUrls: ["./upload-image-modal.component.scss"],
})
export class UploadImageModalComponent implements OnInit {
  @ViewChild("upload", { static: false }) upload: ElementRef;
  @Output() imageUpload = new EventEmitter<string>();
  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {}
  hideModal() {
    this.bsModalRef.hide();
  }
  browseImage() {
    this.upload.nativeElement.click();
  }
  filesDropped(files: FileHandle[]): void {
    this.readerFile(files[0].file);
  }
  onFileChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.readerFile(file);
      // reader.readAsDataURL(file);

      // reader.onload = () => {
      //   this.imageUpload.emit(reader.result.toString());
      //   this.hideModal();
      // };
    }
  }

  private readerFile(file: File) {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUpload.emit(reader.result.toString());
        this.hideModal();
      };
    }
  }
}
