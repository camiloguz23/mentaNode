import { Metadata } from "next";
import { UiHome } from "./section/ui-home";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <UiHome />;
}
