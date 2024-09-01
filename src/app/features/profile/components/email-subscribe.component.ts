import { Component, OnInit } from "@angular/core";

import {
  FormControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-email-subscribe-form",
  template: `
    <!-- <button
      class="btn btn-sm action-btn"
      [ngClass]="{
        disabled: isSubmitting,
        'btn-outline-secondary': !profile?.following,
        'btn-secondary': profile?.following
      }"
      (click)="toggleFollowing()"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      {{ profile?.following ? "Unfollow" : "Follow" }} {{ profile?.username }}
    </button> -->
    <form [formGroup]="FormData" (ngSubmit)="onSubmit(FormData.value)">
      <div class="form-group">
        <label for="Email">Email</label>
        <input
          type="email"
          class="form-control"
          name="Email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          formControlName="Email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          class="form-control"
          name="Fullname"
          placeholder="Full Name"
          formControlName="Fullname"
        />
      </div>

      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea class="form-control" formControlName="Comment" name="Comment">
        </textarea>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        [disabled]="!FormData.valid"
      >
        Submit
      </button>
    </form>
    <p>Email subscription</p>
  `,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class EmailSubscribeComponent implements OnInit {
  FormData!: FormGroup;
  //constructor(private builder: FormBuilder, private contact: ServicesService) { }
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      //Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Email: new FormControl("", [Validators.email]),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);
    //   this.contact.PostMessage(FormData)
    //     .subscribe((response: any) => {
    //       location.href = 'https://mailthis.to/confirm'
    //       console.log(response)
    //     }, (error: { responseText: any; }) => {
    //       console.warn(error.responseText)
    //       console.log({ error })
    //     })
  }
}
