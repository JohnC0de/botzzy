import type { z } from "zod";
import type { meSchema } from "./schema/me.server";

type accountInfoProps = {
  id: number;
  name: string;
  timezone: string;
  billing_information: string;
  plan_id: number;
  trial_expires_at: null;
  affiliate_id: null;
  currency: string;
  plan: {
    id: number;
    product: string;
    name: string;
    description: string;
    trial_days: number;
    currency: string;
    decimals: null;
    plan_month: null;
    plan_year: null;
    amount_month: number;
    amount_year: null;
    visibility: null;
    color: string;
    option_api: null;
    option_links: null;
    option_spaces: null;
    option_domains: null;
    option_stats: null;
    option_geo: null;
    option_platform: null;
    option_expiration: null;
    option_password: null;
    option_disabled: null;
    option_utm: null;
    deleted_at: null;
  };
  card_tokens: {
    id: number;
    account_id: number;
    token: string;
    processor: string;
    Holder: string;
    CardNumber: string;
    ExpirationDate: string;
    created_at: string;
    updated_at: null;
  }[];
};

export type OutletContextProps = {
  me: z.infer<typeof meSchema>;
  accountInfo: accountInfoProps;
};
