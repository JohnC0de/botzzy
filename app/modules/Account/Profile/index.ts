// Controllers
import { ActionController } from "./controllers/ActionController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const ProfileClient = { meta, View };
export const ProfileServer = { ActionController };
