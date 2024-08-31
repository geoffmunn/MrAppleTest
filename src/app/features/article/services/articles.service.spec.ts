import { TestBed } from "@angular/core/testing";

import { ArticlesService } from "./articles.service";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ArticlesService", () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
      declarations: [],
    });
    service = TestBed.inject(ArticlesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
