import { TestBed } from "@angular/core/testing";

import { MarkdownPipe } from "./markdown.pipe";

describe("MarkdownPipe", () => {
  it("create an instance", () => {
    TestBed.runInInjectionContext(() => {
      const pipe = new MarkdownPipe();
      expect(pipe).toBeTruthy();
    });
  });
});
