// Controllers
import { LoaderController } from "./controllers/LoaderController";

// View
import { View } from "./view";
// Functions
import { meta } from "./functions";

export type { OutletContextProps } from "./types";
export const WhatsappMenuModelClient = { View, meta };
export const WhatsappMenuModelServer = { LoaderController };
