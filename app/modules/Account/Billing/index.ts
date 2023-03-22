// Controller
import { ActionController } from "./controller/ActionController";

// Functions
import { meta } from "./functions/meta";
// View
import { View } from "./view";

export const BillingServer = { ActionController };
export const BillingClient = { meta, View };
