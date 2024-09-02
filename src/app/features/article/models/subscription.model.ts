import { Profile } from "../../profile/models/profile.model";

export interface Subscription {
  email_address: string;
  author: Profile;
}
