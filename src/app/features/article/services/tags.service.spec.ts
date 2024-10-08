import { TestBed } from "@angular/core/testing";

import { TagsService } from "./tags.service";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("TagsService", () => {
  let service: TagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    });
    service = TestBed.inject(TagsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
