import { ComponentFixture, TestBed } from "@angular/core/testing";

import ProfileSubscribersComponent from "./profile-subscribers.component";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";

describe("ProfileSubscribersComponent", () => {
  let component: ProfileSubscribersComponent;
  let fixture: ComponentFixture<ProfileSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSubscribersComponent, RouterModule.forRoot([])],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
