import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListErrorsComponent } from "./list-errors.component";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("ListErrorsComponent", () => {
  let component: ListErrorsComponent;
  let fixture: ComponentFixture<ListErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListErrorsComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ListErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
