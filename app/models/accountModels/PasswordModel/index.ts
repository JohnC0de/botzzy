// Controllers
import { LoaderController } from "./controllers/LoaderController.server";
import { ActionController } from "./controllers/ActionController.server";

// Functions
import { meta } from "./functions/meta";

// View
import { View } from "./view";
export const PasswordClient = { meta, View };
export const PasswordServer = { LoaderController, ActionController };