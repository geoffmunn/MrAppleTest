import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleCommentComponent } from "./article-comment.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("ArticleCommentComponent", () => {
  let component: ArticleCommentComponent;
  let fixture: ComponentFixture<ArticleCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCommentComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
