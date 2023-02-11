// Controllers
import { LoaderController } from "./controllers/LoaderController.server";

// Functions
import { links } from "./functions/links";
import { meta } from "./functions/meta";

// View
import { View } from "./view";

export const RootServer = { LoaderController };
export const RootClient = { links, meta, View };
