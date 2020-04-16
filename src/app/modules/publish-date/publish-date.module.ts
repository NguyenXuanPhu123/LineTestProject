import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublishDateComponent } from "./publish-date.component";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PublishDateComponent],
  imports: [CommonModule,SharedModule],
  exports: [PublishDateComponent],
})
export class PublishDateModule {}
