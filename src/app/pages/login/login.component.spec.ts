import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule, By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { LoginComponent } from "./login.component";
import { exec } from "child_process";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginBtn: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginBtn = fixture.debugElement.query(By.css("#loginB"));
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("validate email fn works as expected", () => {
    const validEmail = component.validateEmail("test@test.com");
    const invalidEmail = component.validateEmail("test");

    expect(validEmail).toBe(true);
    expect(invalidEmail).toBe(false);
  });

  it("login btn should be disabled/enabled", () => {
    expect(loginBtn.nativeElement.disabled).toBe(true);
    component.user.email = "test@tes.com";
    component.user.password = "12345";
    fixture.detectChanges();
    expect(loginBtn.nativeElement.disabled).toBe(false);
  });

  it("Email is not valid error works as expected", () => {
    component.user.email = "test";
    component.user.password = "test";
    component.doLogin();
    fixture.detectChanges();
    expect(component.errorMessage).toContain("Email is not valid");
  });

  it("doLogin should be called if you click on login btn", () => {
    spyOn(component, "doLogin");
    component.user.email = "test@tes.com";
    component.user.password = "12345";
    fixture.detectChanges();
    loginBtn.nativeElement.click();

    expect(component.doLogin).toHaveBeenCalledTimes(1);
  });
});
