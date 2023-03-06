// Controllers
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions/meta";
// View
import { View } from "./view";

export const IntegrationsModelServer = { LoaderController };
export const IntegrationsModelClient = { View, meta };
