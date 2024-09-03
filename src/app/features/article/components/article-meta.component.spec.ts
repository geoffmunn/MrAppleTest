import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleMetaComponent } from "./article-meta.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe("ArticleMetaComponent", () => {
  let component: ArticleMetaComponent;
  let fixture: ComponentFixture<ArticleMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMetaComponent, RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
