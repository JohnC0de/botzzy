import type { Schema } from "zod";

export type APISendProps = {
  url: string;
  token?: string;
};

export type APISendWithBodyProps = {
  url: string;
  data: any;
  token?: string;
};

export type APIReturnProps<T = unknown> = {
  data: T;
  error: string | null;
};

export type APIGetProps = {
  schema: Schema;
  url: string;
  token?: string;
};
