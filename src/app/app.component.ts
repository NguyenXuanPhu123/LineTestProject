import { Component, ViewChild } from "@angular/core";
import { TimelinePostDetail } from "./core/http/models/timeline-post-detail";
import { UploadFileComponent } from "./modules/upload-file/upload-file.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("uploadFileCmpt") uploadFileCmpt: UploadFileComponent;
  lstTimeLinePostSubmit: Array<TimelinePostDetail> = [];
  dateSubmit: string;
  timeSubmit: string;
  isPublishNow: boolean;
  title = "fe-test-project";

  time = { hour: 13, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  getDataSubmit(event) {
    this.lstTimeLinePostSubmit = event;
  }
  getDate(event) {
    this.dateSubmit = event;
  }
  getTime(event) {
    this.timeSubmit = event;
  }
  checkIsPublishNow(event) {
    this.isPublishNow = event;
  }

  onSubmit() {
    this.uploadFileCmpt.submitPost();
  }
}
