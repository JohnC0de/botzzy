// Controllers
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const ChannelsModelServer = { LoaderController };
export const ChannelsModelClient = { View, meta };
