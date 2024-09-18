import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {
  decryptAndVerify,
  SetStoreProvider,
  UiHeader,
  UiProviders,
  UserDataGoogle,
} from "@/shared";
import { cookies } from "next/headers";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "100", "300", "500", "900"],
  style: ["normal", "italic"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Menta Note",
  description: "Generated by create next app",
  icons: {
    icon: { url: "public/empty.svg" },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = cookies();
  const dataUser: UserDataGoogle | null = (await decryptAndVerify(
    cookie.get("token")?.value ?? ""
  )) as unknown as UserDataGoogle;
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/vercel.svg" type="any" />
      </head>
      <body>
        <UiProviders>
          <SetStoreProvider userGoogle={dataUser}>
            <UiHeader />
            <main className="main">{children}</main>
          </SetStoreProvider>
        </UiProviders>
      </body>
    </html>
  );
}
