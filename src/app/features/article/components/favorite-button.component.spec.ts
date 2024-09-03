import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteButtonComponent } from "./favorite-button.component";

import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("FavoriteButtonComponent", () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteButtonComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
