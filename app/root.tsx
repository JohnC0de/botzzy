import { RootModel } from "./models";

export const links = RootModel.links;
export const meta = RootModel.meta;

export default function App() {
  return <RootModel.View />;
}
