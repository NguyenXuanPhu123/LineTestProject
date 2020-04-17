import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  @Input() isDisable: boolean;
  @Output() emitDate = new EventEmitter<string>();
  constructor() {}

  myDateValue: Date;

  ngOnInit() {
   
  }

  changeDate(event) {
    this.emitDate.emit(this.formatDate(event));
  }
  private formatDate(date): string {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("-").toString();
  }
}
