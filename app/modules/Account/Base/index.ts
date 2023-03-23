import { ActionController, LoaderController } from "./controllers";
import { View } from "./view";

export type { OutletContextProps } from "./types";

export const AccountBaseClient = { View };
export const AccountBaseServer = { ActionController, LoaderController };
