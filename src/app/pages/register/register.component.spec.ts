import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RegisterComponent } from "./register.component";
import { DebugElement } from "@angular/core";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  function updateForm(firstName, lastName, email, password, confirm_password) {
    component.myForm.controls["firstName"].setValue(firstName);
    component.myForm.controls["lastName"].setValue(lastName);
    component.myForm.controls["email"].setValue(email);
    component.myForm.get(["passwords", "password"]).setValue(password);
    component.myForm
      .get(["passwords", "confirm_password"])
      .setValue(confirm_password);
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("empty form should be invalid", () => {
    updateForm("", "", "", "", "");
    expect(component.myForm.valid).toBe(false);
  });
  it("form should be valid", () => {
    updateForm("test", "test", "test@test.com", "12345", "12345");
    expect(component.myForm.valid).toBe(true);
  });
  it("form is invlaid because email is invalid", () => {
    updateForm("test", "test", "test", "12345", "12345");
    expect(component.myForm.valid).toBe(false);
    expect(component.myForm.controls["email"].getError("email")).toBeTruthy();
  });
});
