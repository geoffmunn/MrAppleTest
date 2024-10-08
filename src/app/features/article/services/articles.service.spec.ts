import { TestBed } from "@angular/core/testing";

import { ArticlesService } from "./articles.service";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("ArticlesService", () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    });
    service = TestBed.inject(ArticlesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
