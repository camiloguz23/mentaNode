import { Metadata } from "next";
import { UiHome } from "./section/ui-home";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const { userId } = auth();
  console.log("user", userId);
  return <UiHome />;
}
