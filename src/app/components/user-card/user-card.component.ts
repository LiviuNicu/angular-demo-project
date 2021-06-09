import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "src/app/interfaces/user";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() userData: User;
  @Output() profileEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() tasksEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  goToProfile() {
    this.profileEvent.emit(this.userData._id);
  }

  goToTasks() {
    this.tasksEvent.emit(this.userData._id);
  }
}
