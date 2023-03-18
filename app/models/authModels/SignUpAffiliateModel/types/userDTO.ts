type accountProps = {
  id: 2;
  name: "Botzzy";
  created_at: "2023-02-17T20:44:05.377350Z";
  updated_at: "2023-02-17T20:44:05.377350Z";
  locale: 0;
  domain: null;
  support_email: null;
  settings_flags: 0;
  feature_flags: 33029775;
  auto_resolve_duration: null;
  limits: "{}";
  custom_attributes: "{}";
  status: 0;
  pivot: { ad_user_id: 1; account_id: 2 };
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
