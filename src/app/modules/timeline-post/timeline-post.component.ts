import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { TimelinePostService } from "src/app/core/http/api/timeline-post-service/timeline-post.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TimelinePostDetail } from "src/app/core/http/models/timeline-post-detail";

@Component({
  selector: "app-timeline-post",
  templateUrl: "./timeline-post.component.html",
  styleUrls: ["./timeline-post.component.scss"],
})
export class TimelinePostComponent implements OnInit, OnChanges, OnDestroy {
  private readonly ngUnsubcribe = new Subject();
  lstTimelinePost: Array<TimelinePostDetail> = [];
  @Input() lstImgUpload: Array<string>;
  constructor(private readonly timelinePostService: TimelinePostService) {}
  ngOnChanges(changes: SimpleChanges) {
    this.changeLstImgUpload(changes);
  }
  ngOnDestroy() {
    this.ngUnsubcribe.next();
    this.ngUnsubcribe.complete();
  }

  ngOnInit() {
    this.trackingTimelinePostData();
  }

  private changeLstImgUpload(changes: SimpleChanges) {
    if (changes["lstImgUpload"]) {
      this.lstImgUpload = changes.lstImgUpload.currentValue;
      let timelinePost: TimelinePostDetail = {
        lstImgUpload: this.lstImgUpload,
      };
      this.timelinePostService
        .addTimelinePost(timelinePost)
        .pipe(takeUntil(this.ngUnsubcribe))
        .subscribe((res: TimelinePostDetail) => {
          if (res) {
            this.lstTimelinePost.push(res);
          }
        });
    }
  }

  private trackingTimelinePostData() {
    this.timelinePostService
      .getTimelinePosts()
      .pipe(takeUntil(this.ngUnsubcribe))
      .subscribe((response: Array<TimelinePostDetail>) => {
        if (response) {
          console.log(response);

          this.lstTimelinePost = [...response];
        }
      });
  }
}
