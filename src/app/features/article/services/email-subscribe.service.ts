import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Profile } from "../../profile/models/profile.model";
import { SubscriptionListConfig } from "../models/subscription-list-config.model";
import { LocalStorage } from "../models/localstorage.model";
import { Subscription } from "../models/subscription.model";
@Injectable({ providedIn: "root" })
export class EmailSubscribeService {
  private local_storage: LocalStorage = new LocalStorage();

  constructor(private readonly http: HttpClient) {}

  query(
    config: SubscriptionListConfig,
  ): Observable<{ subscriptions: Subscription[]; subscriptionsCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    let params = new HttpParams();

    Object.keys(config.filters).forEach((key) => {
      // @ts-ignore
      params = params.set(key, config.filters[key]);
    });

    return this.http.get<{
      subscriptions: Subscription[];
      subscriptionsCount: number;
    }>("/subscribe", { params });
  }

  //   get(slug: string): Observable<Article> {
  //     return this.http
  //       .get<{ article: Article }>(`/articles/${slug}`)
  //       .pipe(map((data) => data.article));
  //   }

  //   delete(slug: string): Observable<void> {
  //     return this.http.delete<void>(`/articles/${slug}`);
  //   }

  /**
   * Get all the subscriptions in the local storage object.
   * If none exist, return an empty array
   *
   * @returns array
   */
  public getAllSubscriptions(): Subscription[] {
    let local_subscriptions: Subscription[] = [];

    if (this.local_storage.getData("subscriptions")) {
      let subscriptions = this.local_storage.getData("subscriptions");
      if (subscriptions != null) {
        local_subscriptions = JSON.parse(subscriptions);
      }
    }

    return local_subscriptions;
  }

  /**
   * A stub to save subscriptions to the local storage object.
   * This can be replaced with the 'subscribe' function when it is working
   *
   * @param email_address
   * @param profile
   *
   * @returns boolean
   */
  subscribe_stub(email_address: string, profile: Profile): boolean {
    let subscription_list = this.getAllSubscriptions();

    // Don't add this email address if it already exists
    let exists: boolean = false;
    for (var key in subscription_list) {
      if (subscription_list[key].email_address == email_address) {
        exists = true;
        break;
      }
    }

    if (exists == false) {
      subscription_list.push({ email_address: email_address, author: profile });

      this.local_storage.saveData(
        "subscriptions",
        JSON.stringify(subscription_list),
      );
    }

    return exists;
  }

  subscribe(email_address: string, profile: Profile): Observable<Subscription> {
    return this.http
      .post<{ subscription: Subscription }>("/subscribe/", {
        email_address: email_address,
        profile_username: profile.username,
      })
      .pipe(map((data: { subscription: any }) => data.subscription));
  }

  //   update(article: Partial<Article>): Observable<Article> {
  //     return this.http
  //       .put<{ article: Article }>(`/articles/${article.slug}`, {
  //         article: article,
  //       })
  //       .pipe(map((data) => data.article));
  //   }

  //   favorite(slug: string): Observable<Article> {
  //     return this.http
  //       .post<{ article: Article }>(`/articles/${slug}/favorite`, {})
  //       .pipe(map((data) => data.article));
  //   }

  //   unfavorite(slug: string): Observable<void> {
  //     return this.http.delete<void>(`/articles/${slug}/favorite`);
  //   }
}
