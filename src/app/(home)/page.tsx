import { Metadata } from "next";
import { UiHome } from "./section/with-section/ui-home";
import { cookies } from "next/headers";
import { decryptAndVerify, UserDataGoogle } from "@/shared";
import { WithoutSection } from "./section";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const cookie = cookies();
  const dataUser: UserDataGoogle | null = (await decryptAndVerify(
    cookie.get("token")?.value ?? ""
  )) as unknown as UserDataGoogle;
  console.log("home", dataUser, "cookie", cookie.get("token")?.value);
  return (
    <>{dataUser ? <UiHome userGoogle={dataUser} /> : <WithoutSection />}</>
  );
}
