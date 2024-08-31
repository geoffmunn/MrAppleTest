import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticlePreviewComponent } from "./article-preview.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ArticlePreviewComponent", () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArticlePreviewComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
