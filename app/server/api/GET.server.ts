import { createZodFetcher } from "zod-fetch";
import type { z } from "zod";
import type { APIGetProps, APIReturnProps } from "./types.server";

const fetchWithZod = createZodFetcher();
export async function GET({ schema, url, token }: APIGetProps) {
  const apiHEADER = token
    ? { headers: { authorization: `bearer ${token}` } }
    : undefined;

  const fetchResponse = await fetchWithZod(
    schema,
    process.env.BASE_API_URL + url,
    apiHEADER
  )
    .then((data) => {
      return { error: null, data } as APIReturnProps<z.infer<typeof schema>>;
    })
    .catch((error) => {
      return { error, data: null } as APIReturnProps<any>;
    });

  return fetchResponse;
}
