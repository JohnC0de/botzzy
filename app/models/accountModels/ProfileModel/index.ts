// Controllers
import { ActionController } from "./controllers/ActionController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const ProfileModelClient = { meta, View };
export const ProfileModelServer = { ActionController };
