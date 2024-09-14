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

  return (
    <>{dataUser ? <UiHome userGoogle={dataUser} /> : <WithoutSection />}</>
  );
}
