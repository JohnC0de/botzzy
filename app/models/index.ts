//* CHANNEL
export {
  // root/v1/protect/channels
  AllChannelsModelClient,
  AllChannelsModelServer,
} from "./channelModels/AllChannelsModel";
export {
  //? WHATSAPP
  // root/v1/protect/channels/whatsapp/${id}/*
  WhatsappMenuModelClient,
  WhatsappMenuModelServer,
} from "./channelModels/WhatsappModel/MenuModel";
export {
  //? WHATSAPP
  // root/v1/protect/channels/whatsapp/${id}/*
  WhatsaooQRCodeModelClient,
  WhatsaooQRCodeModelServer,
} from "./channelModels/WhatsappModel/QRCodeModel";

//* PROTECT
export {
  // root/v1/protect/integrations
  IntegrationsModelClient,
  IntegrationsModelServer,
} from "./protectModels/IntegrationsModel";
export {
  // root/v1/protect/integrations/events
  EventsModelClient,
  EventsModelServer,
} from "./protectModels/EventsModel";
export {
  // root/v1/protect/affiliatesales
  AffiliateSalesModelClient,
  AffiliateSalesModelServer,
} from "./protectModels/AffiliateSalesModel";
export {
  // root/v1/protect/dashboard
  DashboardModelClient,
  DashboardModelServer,
} from "./protectModels/DashboardModel";
export { FlowClient } from "./protectModels/FlowModel"; //root/v1/flow/*

//* UNPROTECT
export {
  // root/*
  RootClient,
  RootServer,
} from "./unprotectModels/RootModel";
export {
  // root/v1/*
  LayoutClient,
} from "./unprotectModels/LayoutModel";
