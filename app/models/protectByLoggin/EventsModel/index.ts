// Controllers
import { ActionController } from "./controllers/ActionController";
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";

export const EventsModelServer = { ActionController, LoaderController };
export const EventsModelClient = { View, meta };
