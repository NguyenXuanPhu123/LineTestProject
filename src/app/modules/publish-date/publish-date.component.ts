import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-publish-date",
  templateUrl: "./publish-date.component.html",
  styleUrls: ["./publish-date.component.scss"],
})
export class PublishDateComponent implements OnInit {
  @Output() emitDate = new EventEmitter<string>();
  @Output() emitTime = new EventEmitter<string>();
  @Output() isPublishNow = new EventEmitter<boolean>();
  form: FormGroup;
  isDisableDateTime = true;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.typeSubmitChange();
    this.isPublishNow.emit(true);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      typeSubmit: ["publishNow"],
    });
  }

  private typeSubmitChange() {
    this.form.controls["typeSubmit"].valueChanges.subscribe((value) => {
      console.log(value);
      if (value === "publishNow") {
        this.isDisableDateTime = true;
        this.isPublishNow.emit(true);
      } else {
        this.isDisableDateTime = false;
      }
    });
  }
  getDate(event) {
    this.emitDate.emit(event);
  }
  getTime(event) {
    this.emitTime.emit(event);
  }
}
