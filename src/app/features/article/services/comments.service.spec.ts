import { TestBed } from "@angular/core/testing";

import { CommentsService } from "./comments.service";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("CommentsService", () => {
  let service: CommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    });
    service = TestBed.inject(CommentsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
