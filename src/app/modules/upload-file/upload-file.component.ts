import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
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
export class UploadFileComponent implements OnInit, OnDestroy, OnChanges {
  private readonly ngUnsubcribe = new Subject();
  @Output() listTimelinePostsEmit = new EventEmitter<
    Array<TimelinePostDetail>
  >();
  @Input() dateSubmit: string;
  @Input() timeSubmit: string;
  @Input() isPublishNow: boolean;

  imageUrlToShow: string[] = [];
  constructor(
    private readonly modalService: ModalService,
    private readonly timelinePostService: TimelinePostService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.changeTimeSubmit(changes);
  }

  ngOnDestroy() {
    this.ngUnsubcribe.next();
    this.ngUnsubcribe.complete();
  }

  ngOnInit() {}

  private changeTimeSubmit(changes: SimpleChanges) {
    if (changes["timeSubmit"]) {
      this.timeSubmit = changes.timeSubmit.currentValue;
    }
  }

  openUploadModal() {
    this.modalService
      .showUploadImageModal()
      .pipe(takeUntil(this.ngUnsubcribe))
      .subscribe((dataImage: string) => {
        if (dataImage) {
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
    let timelinePost: TimelinePostDetail = {
      lstImgUpload: this.imageUrlToShow,
      datePost: this.isPublishNow
        ? this.formatDate(new Date())
        : this.dateSubmit,
      timePost: this.isPublishNow ? "" : this.timeSubmit,
    };

    this.timelinePostService
      .addPosts(timelinePost)
      .pipe(takeUntil(this.ngUnsubcribe))
      .subscribe((res) => {
        if (res) {
          this.timelinePostService
            .getTimelinePosts()
            .pipe(takeUntil(this.ngUnsubcribe))
            .subscribe((res: TimelinePostDetail[]) => {
              if (res) {
                this.listTimelinePostsEmit.emit(res);
              }
            });
        }
      });
  }

  private formatDate(date): string {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      hour = d.getHours(),
      min = d.getMinutes();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return `${[month, day, year].join("-").toString()} ${[hour, min].join(
      ":"
    )}`;
  }
}
