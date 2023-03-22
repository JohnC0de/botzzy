import { ActionController } from "./controllers/ActionController.server";

import { meta } from "./functions/meta";
import { View } from "./view";

export const SignUpClient = { meta, View };
export const SignUpServer = { ActionController };
