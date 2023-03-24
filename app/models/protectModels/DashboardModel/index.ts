import { LoaderController } from "./controllers/LoaderController";

import { meta } from "./functions";
import { View } from "./view";

export const DashboardModelServer = { LoaderController };
export const DashboardModelClient = { View, meta };
