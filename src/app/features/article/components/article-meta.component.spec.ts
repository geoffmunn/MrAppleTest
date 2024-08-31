import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleMetaComponent } from "./article-meta.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ArticleMetaComponent", () => {
  let component: ArticleMetaComponent;
  let fixture: ComponentFixture<ArticleMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArticleMetaComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [],
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
