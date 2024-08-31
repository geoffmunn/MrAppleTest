import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FavoriteButtonComponent } from "./favorite-button.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("FavoriteButtonComponent", () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FavoriteButtonComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [],
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
