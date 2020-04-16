import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TimelinePostModule } from "./modules/timeline-post/timeline-post.module";
import { SharedModule } from "./shared/shared.module";
import { PublishDateModule } from "./modules/publish-date/publish-date.module";
import { UploadFileModule } from "./modules/upload-file/upload-file.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimelinePostModule,
    PublishDateModule,
    UploadFileModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
