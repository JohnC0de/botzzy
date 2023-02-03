export type APIErrorProps = {
  code: number;
  message: string;
};

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
  error: APIErrorProps | null;
};
