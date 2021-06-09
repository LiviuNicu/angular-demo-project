import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  private id: string;
  public profile: User;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
      this.getUserProfile(this.id);
    });
    //For query params  this.activatedRoute.queryParams.subcribe....
  }

  getUserProfile(id) {
    this.userService.getUserProfile(id).subscribe((response: User) => {
      this.profile = response;
    });
  }
}
