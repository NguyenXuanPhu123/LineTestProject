import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  lstImgUpload: Array<string> = [];
  title = "fe-test-project";

  getImgSubmit(event) {
    this.lstImgUpload = event;
    console.log("emit", event);
  }
}
