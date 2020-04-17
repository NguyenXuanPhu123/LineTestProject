import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-time-picker",
  templateUrl: "./time-picker.component.html",
  styleUrls: ["./time-picker.component.scss"],
})
export class TimePickerComponent implements OnInit {
  @Output() emitTime = new EventEmitter<string>();
  @Input() isDisable: boolean;
  time: any;
  meridian = true;
  constructor() {}

  ngOnInit() {
    if (this.time) {
      this.emitTime.emit(`${this.time.hour}:${this.time.minute}`);
    }
  }
  changeTime(event) {
    if (event) {
      this.emitTime.emit(`${event.hour}:${event.minute}`);
    }
  }
}
