//* ACCOUNT
export {
  // root/v1/account/*
  AccountModelClient,
  AccountModelServer,
} from "./accountModels/AccountModel";
export {
  // root/v1/account/profile
  ProfileModelClient,
  ProfileModelServer,
} from "./accountModels/ProfileModel";
export {
  // root/v1/account/billing
  BillingClientModel,
  BillingServerModel,
} from "./accountModels/BillingModel";
export {
  // root/v1/account/password
  PasswordModelClient,
  PasswordModelServer,
} from "./accountModels/PasswordModel";

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

//* AUTH
export {
  // root/auth/forgot
  ForgotClient,
  ForgotServer,
} from "./authModels/ForgotModel";
export {
  // root/auth/signin
  SignInClient,
  SignInServer,
} from "./authModels/SignInModel";
export {
  // root/auth/signupaffiliate
  SignUpAffiliateModelClient,
  SignUpAffiliateModelServer,
} from "./authModels/SignUpAffiliateModel";

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
