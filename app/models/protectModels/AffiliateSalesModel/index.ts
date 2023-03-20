// Controllers
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const AffiliateSalesModelServer = { LoaderController };
export const AffiliateSalesModelClient = { View, meta };
