import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimelinePostService } from "./http/api/timeline-post-service/timeline-post.service";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./http/services/in-memory-data.service";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [TimelinePostService],
})
export class CoreModule {}
