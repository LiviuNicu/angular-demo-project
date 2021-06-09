import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public users: User[];
  public search: string;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe((response: { allUsers: User[]; loggedUser: User }) => {
        this.users = response.allUsers;
      });
  }

  goProfile(id) {
    this.router.navigate(["/private/profile/" + id]);
  }
  goTasks(id) {
    this.router.navigate(["/private/tasks/" + id]);
  }
}
