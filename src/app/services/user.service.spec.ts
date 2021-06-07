import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
