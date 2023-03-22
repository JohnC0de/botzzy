type accountProps = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  locale: number;
  domain: string | null;
  support_email: string | null;
  settings_flags: number;
  feature_flags: number;
  auto_resolve_duration: null;
  limits: string;
  custom_attributes: string;
  status: number;
  pivot: { ad_user_id: number; account_id: number };
};

export type userDTO = {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  name: string;
  email: string;
  account_id: string | null;
  accounts: accountProps[];
};
