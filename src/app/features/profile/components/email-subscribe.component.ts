import {
  Component,
  inject,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { EmailSubscribeService } from "../../article/services/email-subscribe.service";

import {
  FormControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Profile } from "../models/profile.model";

@Component({
  selector: "app-email-subscribe-form",
  template: `
    <div id="email-subscription-container">
      <form [formGroup]="FormData" (ngSubmit)="onSubmit(FormData.value)">
        <div class="form-group">
          <label for="Email"
            >Subscribe for more updates from this author:</label
          >
          <div class="form-row">
            <input
              type="email"
              class="form-control"
              name="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              formControlName="Email"
            />
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="!FormData.valid"
            >
              Submit
            </button>
          </div>
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
          <p>{{ result_message }}</p>
        </div>
      </form>
    </div>
  `,
  imports: [ReactiveFormsModule],
  styles: `
    div#email-subscription-container {
      width: 500px;
      margin: 0px auto;
    }

    div.form-row {
    }

      input {
        width: 400px;
        float: left;
      }
  `,
  standalone: true,
})
export class EmailSubscribeComponent implements OnInit {
  FormData!: FormGroup;

  @Input() profile: Profile | undefined;

  private subscriptions: EmailSubscribeService = inject(EmailSubscribeService);
  public result_message: string = "";

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Email: new FormControl("", [Validators.email]),
    });
  }

  onSubmit(FormData: any) {
    if (this.profile != undefined) {
      let result: boolean = this.subscriptions.subscribe_stub(
        FormData["Email"],
        this.profile,
      );

      if (result == true) {
        this.subscriptions.notifyEmailAddress(FormData["Email"], this.profile);

        this.result_message =
          "This email address has been added to the mailing list!";
      } else {
        this.result_message = "This email address is already a subscriber!";
      }
    }
  }
}
