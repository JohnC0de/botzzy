// Controllers
import { ActionController } from "./controllers/ActionController";
import { LoaderController } from "./controllers/LoaderController";
import { WhatsappLoaderController } from "./controllers/WhatsappLoaderController";

// Functions
import { meta } from "./functions";
// View
import { View } from "./view";
import { WhatsappView } from "./view/whatsapp";

export const ChannelsModelServer = {
  ActionController,
  LoaderController,
  WhatsappLoaderController,
};
export const ChannelsModelClient = { View, WhatsappView, meta };
