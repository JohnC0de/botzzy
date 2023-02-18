// Controllers
import { ActionController } from "./controllers/ActionController";
import { LoaderController } from "./controllers/LoaderController";

// Functions
import { meta } from "./functions/meta";

// View
import { View } from "./view";

export const FaqCategoriesAdminServer = { ActionController, LoaderController };
export const FaqCategoriesAdminClient = { meta, View };
