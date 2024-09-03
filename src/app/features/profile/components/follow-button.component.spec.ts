import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FollowButtonComponent } from "./follow-button.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("FollowButtonComponent", () => {
  let component: FollowButtonComponent;
  let fixture: ComponentFixture<FollowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowButtonComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
