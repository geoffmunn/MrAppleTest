import { Component, DestroyRef, inject, Input, OnInit } from "@angular/core";
import { ArticlesService } from "../services/articles.service";
import { ArticleListConfig } from "../models/article-list-config.model";
import { Article } from "../models/article.model";
import { ArticlePreviewComponent } from "./article-preview.component";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { LoadingState } from "../../../core/models/loading-state.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Subscription } from "../models/subscription.model";
import { SubscriptionListConfig } from "../models/subscription-list-config.model";
import { EmailSubscribeService } from "../services/email-subscribe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Profile } from "../../profile/models/profile.model";
import { ProfileService } from "../../profile/services/profile.service";

@Component({
  selector: "app-subscriber-list",
  template: `
    <!-- @if (loading === LoadingState.LOADING) {
      <div class="article-preview">Loading articles...</div>
    }

    @if (loading === LoadingState.LOADED) {
      @for (article of results; track article.slug) {
        <app-article-preview [article]="article" />
      } @empty {
        <div class="article-preview">No articles are here... yet.</div>
      }

      <nav>
        <ul class="pagination">
          @for (pageNumber of totalPages; track pageNumber) {
            <li
              class="page-item"
              [ngClass]="{ active: pageNumber === currentPage }"
            >
              <button class="page-link" (click)="setPageTo(pageNumber)">
                {{ pageNumber }}
              </button>
            </li>
          }
        </ul>
      </nav>
    } -->
    <ul id="subscriber-list">
      @for (subscriber of results; track subscriber) {
        <li>
          {{ subscriber.email_address }} -
          <span
            [attr.data-email-address]="subscriber.email_address"
            (click)="removeSubscriber(subscriber.email_address)"
            >Remove</span
          >
        </li>
      } @empty {
        <li>No subscribers so far.</li>
      }
    </ul>
  `,
  imports: [NgForOf, NgClass, NgIf],
  styles: `
    .page-link {
      cursor: pointer;
    }
    ul#subscriber-list {
        margin: 1em 0px;
    }

        ul#subscriber-list li {
            margin: 0px 0px 1em 0px;
       }

        ul#subscriber-list li span {
            color: rgba(0,0,0,.3)
        }

        ul#subscriber-list li span:hover {
            color: rgba(0,0,0,.8)
        }
  `,
  standalone: true,
})
export class SubscriberListComponent {
  query!: ArticleListConfig;
  results: Subscription[] = [];
  currentPage = 1;
  totalPages: Array<number> = [];
  loading = LoadingState.NOT_LOADED;
  LoadingState = LoadingState;
  destroyRef = inject(DestroyRef);

  @Input() limit!: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  getAuthor(): string {
    return window.location.href.split("/")[4]; // Fix me to use the Angular methods
  }

  constructor(private emailSubscriptionService: EmailSubscribeService) {
    let author = this.getAuthor();
    let subscriptions =
      this.emailSubscriptionService.getSubscriptionsByAuthor(author);

    this.results = subscriptions;
  }

  removeSubscriber(email_address: string) {
    let author = this.getAuthor();
    let subscriptions = this.emailSubscriptionService.unsubscribe_stub(
      email_address,
      author,
    );

    this.results = subscriptions;
  }

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  /**
   * Disabled - this is a PoC and will return errors due to no backend support.
   */
  runQuery() {
    // this.loading = LoadingState.LOADING;
    // this.results = [];
    // // Create limit and offset filter (if necessary)
    // if (this.limit) {
    // this.query.filters.limit = this.limit;
    // this.query.filters.offset = this.limit * (this.currentPage - 1);
    // }
    // this.emailSubscriptionService
    // .query(this.query)
    // .pipe(takeUntilDestroyed(this.destroyRef))
    // .subscribe((data) => {
    //     this.loading = LoadingState.LOADED;
    //     this.results = data.subscriptions;
    //     // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
    //     this.totalPages = Array.from(
    //     new Array(Math.ceil(data.subscriptionsCount / this.limit)),
    //     (val, index) => index + 1,
    //     );
    // });
  }
}
