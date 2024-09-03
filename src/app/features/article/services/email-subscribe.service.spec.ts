import { TestBed } from "@angular/core/testing";

import { EmailSubscribeService } from "./email-subscribe.service";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("EmailSubscribeService", () => {
  let service: EmailSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    });
    service = TestBed.inject(EmailSubscribeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
