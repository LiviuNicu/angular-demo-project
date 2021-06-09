import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  cursorPointer = "pointer";
  name = environment.name;
  constructor(private authSerivce: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authSerivce.logout();
  }
}
