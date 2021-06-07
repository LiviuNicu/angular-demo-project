import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async, inject } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PublicGuard } from "./public.guard";

describe("PublicGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PublicGuard],
    });
  });

  it("should ...", inject([PublicGuard], (guard: PublicGuard) => {
    expect(guard).toBeTruthy();
  }));
});
