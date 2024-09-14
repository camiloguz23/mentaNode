import { Metadata } from "next";
import { UiHome } from "./section/ui-home";
import { cookies } from "next/headers";
import { decryptAndVerify, UserDataGoogle } from "@/shared";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const cookie = cookies();
  const dataUser: UserDataGoogle | null = (await decryptAndVerify(
    cookie.get("token")?.value ?? ""
  )) as unknown as UserDataGoogle;

  return <UiHome userGoogle={dataUser} />;
}
