import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { ModalService } from "src/app/shared/services/modal-service/modal.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TimelinePostService } from "src/app/core/http/api/timeline-post-service/timeline-post.service";
import { TimelinePostDetail } from "src/app/core/http/models/timeline-post-detail";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"],
})
export class UploadFileComponent implements OnInit, OnDestroy {
  private readonly ngUnsubcribe = new Subject();
  @Output() listImgEmit = new EventEmitter<Array<string>>();

  imageUrlToShow: string[] = [];
  constructor(
    private readonly modalService: ModalService,
    private readonly timelinePostService: TimelinePostService
  ) {}

  ngOnDestroy() {
    this.ngUnsubcribe.next();
    this.ngUnsubcribe.complete();
  }

  ngOnInit() {}

  openUploadModal() {
    this.modalService
      .showUploadImageModal()
      .pipe(takeUntil(this.ngUnsubcribe))
      .subscribe((dataImage: string) => {
        if (dataImage) {
          console.log(dataImage);
          this.imageUrlToShow.push(dataImage);
        }
      });
  }
  deleteImage(image: string) {
    const index = this.imageUrlToShow.indexOf(image);
    if (index !== -1) {
      this.imageUrlToShow.splice(index, 1);
    }
  }

  submitPost() {
    this.listImgEmit.emit(this.imageUrlToShow);
  }
}
