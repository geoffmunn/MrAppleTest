import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubscriberListComponent } from "./subscriber-list.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("SubscriberListComponent", () => {
  let component: SubscriberListComponent;
  let fixture: ComponentFixture<SubscriberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriberListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
