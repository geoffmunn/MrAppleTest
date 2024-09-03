import { ComponentFixture, TestBed } from "@angular/core/testing";

import ProfileArticlesComponent from "./profile-articles.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe("ProfileArticlesComponent", () => {
  let component: ProfileArticlesComponent;
  let fixture: ComponentFixture<ProfileArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileArticlesComponent, RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
