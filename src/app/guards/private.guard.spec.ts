import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, inject } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PrivateGuard } from "./private.guard";

describe("PrivateGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PrivateGuard],
    });
  });

  it("should ...", inject([PrivateGuard], (guard: PrivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
