import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginDTO } from "src/app/interfaces/login-dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user: LoginDTO = {
    email: "",
    password: "",
  };
  public errorMessage: any = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  doLogin() {
    this.errorMessage = false;
    if (this.validateEmail(this.user.email)) {
      this.authService.login(this.user).subscribe(
        (response: any) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            this.router.navigate(["/private/dashboard"]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.errorMessage = "Email is not valid";
    }
  }

  isNotValid() {
    return !this.user.email || !this.user.password;
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
