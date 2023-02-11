import axios from "axios";
import type { APISendProps, APIReturnProps } from "./types.server";

export async function DELETE<T = unknown>({ url, token }: APISendProps) {
  const apiHEADER = token
    ? { headers: { authorization: `bearer ${token}` } }
    : undefined;

  try {
    const axiosResponse = await axios.delete<T>(
      process.env.BASE_API_URL + url,
      apiHEADER
    );

    const successfulAnswer: APIReturnProps<T> = {
      data: axiosResponse.data,
      error: null,
    };

    return successfulAnswer;
  } catch (err: any) {
    const failedAnswer: APIReturnProps<null> = {
      data: null,
      error: err.response.data.message,
    };

    return failedAnswer;
  }
}
