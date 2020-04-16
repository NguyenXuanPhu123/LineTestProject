import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimelinePostComponent } from "./timeline-post.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [TimelinePostComponent],
  imports: [CommonModule, SharedModule],
  exports: [TimelinePostComponent],
})
export class TimelinePostModule {}
