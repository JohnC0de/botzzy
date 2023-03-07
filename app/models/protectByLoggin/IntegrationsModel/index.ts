// Controllers
import { ActionController } from "./controllers/ActionController";
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const IntegrationsModelServer = { ActionController, LoaderController };
export const IntegrationsModelClient = { View, meta };
