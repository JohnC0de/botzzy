import axios from "axios";
import { type ActionFunction, json } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const name = formData.name.toString();
  const apikey = formData.apikey.toString();

  if (!name || !apikey)
    return { toast: { type: "error", message: "Informações inválidas" } };

  try {
    const apiResponse = await axios.get(
      `https://api.cloudzapi.com/${name}/instance/exportQrcodeBase64`,
      { headers: { apikey } }
    );

    return json({ qrCode: apiResponse.data.base64, toast: null });
  } catch (err) {
    return json({ qrCode: null, toast: null });
  }
};
