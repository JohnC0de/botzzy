import axios from "axios";
import type { APISendWithBodyProps, APIReturnProps } from "./types.server";

export async function PUT<T = unknown>({
  url,
  token,
  data,
}: APISendWithBodyProps) {
  const apiHEADER = token
    ? { headers: { authorization: `bearer ${token}` } }
    : undefined;

  try {
    const axiosResponse = await axios.put<T>(
      process.env.BASE_API_URL + url,
      data,
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
