import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleListComponent } from "./article-list.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ArticleListComponent", () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ArticleListComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
