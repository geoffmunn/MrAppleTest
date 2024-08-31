import { TestBed } from "@angular/core/testing";

import { TagsService } from "./tags.service";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("TagsService", () => {
  let service: TagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
      declarations: [],
    });
    service = TestBed.inject(TagsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
