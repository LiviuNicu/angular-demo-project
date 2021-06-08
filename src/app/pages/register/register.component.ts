import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { RegisterDTO } from "src/app/interfaces/register-dto";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public myForm: FormGroup;
  public submited: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authServce: AuthService
  ) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      passwords: this.formBuilder.group(
        {
          password: ["", [Validators.required, Validators.minLength(5)]],
          confirm_password: [
            "",
            [Validators.required, Validators.minLength(5)],
          ],
        },
        { validator: this.passwordConfirming }
      ),
    });
  }

  passwordConfirming(field: AbstractControl): { spanac: boolean } {
    if (field.get("password").value !== field.get("confirm_password").value) {
      return { spanac: true };
    }
  }

  doRegister() {
    debugger;
    this.submited = true;
    console.log(this.myForm);
    if (this.myForm.valid) {
      const data: RegisterDTO = {
        firstName: this.myForm.value.firstName,
        lastName: this.myForm.value.lastName,
        email: this.myForm.value.email,
        password: this.myForm.value.passwords.password,
      };
      this.authServce.register(data).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
