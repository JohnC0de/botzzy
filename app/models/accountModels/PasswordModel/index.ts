// Controllers
import { ActionController } from "./controllers/ActionController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const PasswordModelClient = { meta, View };
export const PasswordModelServer = { ActionController };
