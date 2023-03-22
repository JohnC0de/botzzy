import { ActionController } from "./controllers/ActionController.server";

import { meta } from "./functions/meta";
import { View } from "./view";

export const SignUpAffiliateClient = { meta, View };
export const SignUpAffiliateServer = { ActionController };
