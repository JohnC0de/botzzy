// Controllers
import { LoaderController } from "./controllers/LoaderController";
import { ActionController } from "./controllers/ActionController";

// Functions
import { meta } from "./functions/meta";

// View
import { View } from "./view";
export const SignInClient = { meta, View };
export const SignInServer = { LoaderController, ActionController };
