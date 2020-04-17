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
export class TimelinePostComponent implements OnInit, OnDestroy {
  private readonly ngUnsubcribe = new Subject();
  lstTimelinePosts: Array<TimelinePostDetail> = [];
  @Input() lstTimeLinePostSubmit: Array<TimelinePostDetail>;
  constructor(private readonly timelinePostService: TimelinePostService) {}

  ngOnDestroy() {
    this.ngUnsubcribe.next();
    this.ngUnsubcribe.complete();
  }

  ngOnInit() {}
}
