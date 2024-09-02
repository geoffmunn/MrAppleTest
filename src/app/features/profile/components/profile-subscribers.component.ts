import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { SubscriberListComponent } from "../../article/components/subscriber-list.component";
import { SubscriptionListConfig } from "../../article/models/subscription-list-config.model";
import { Profile } from "../models/profile.model";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profile-subscribers",
  //templateUrl: "./profile-subscribers.component.html",
  template: `<app-subscriber-list
    [limit]="10"
    [config]="subscriptionsConfig"
  />`,
  imports: [SubscriberListComponent],
  standalone: true,
})
export default class ProfileSubscribersComponent implements OnInit {
  profile!: Profile;
  subscriptionsConfig!: SubscriptionListConfig;
  destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private readonly profileService: ProfileService,
  ) {}

  /**
   * Disabled - PoC code with no backend support
   */
  ngOnInit(): void {
    // this.profileService
    //   .get(this.route.snapshot.params["username"])
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe({
    //     next: (profile: Profile) => {
    //       this.profile = profile;
    //       this.subscriptionsConfig = {
    //         type: "all",
    //         filters: {
    //           author: this.profile.username,
    //         },
    //       };
    //     },
    //   });
  }
}
