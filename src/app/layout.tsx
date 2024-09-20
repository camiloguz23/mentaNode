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
  description:
    "Pagina para hacer registro de notas organizada en libros o cuadernos",
  manifest: "/manifest.json",
  icons: {
    icon: { url: "public/empty.svg" },
  },
  themeColor: "#000",
  authors: [
    {
      name: "Jeyson Camilo Guzman Rico",
      url: "https://www.jeysonguzman.online/",
    },
  ],
  keywords:
    "notas, gestión de notas, cuadernos digitales, organización de notas, productividad, aplicación de notas, tomar notas, notas en la nube, notas organizadas, app de productividad, cuadernos en línea, libros de notas, escritura digital, organizar información, apuntes digitales, administración de notas, aplicación para tomar notas, libros de apuntes, registro de notas, gestión de libros y cuadernos, Menta Note",

  creator: "Jeyson Camilo Guzman Rico",
  openGraph: {
    type: "website",
    siteName: "MentaNote",
    description:
      "Pagina para hacer registro de notas organizada en libros o cuadernos",
    images: [
      {
        url: "https://i.ibb.co/gFCwJ3y/vercel.png", // Asegúrate de reemplazar esto con la URL real de tu imagen
        width: 800,
        height: 600,
        alt: "Imagen descriptiva de Register Time",
      },
      {
        url: "https://i.ibb.co/gFCwJ3y/vercel.png", // Asegúrate de reemplazar esto con la URL real de tu imagen grande
        width: 1800,
        height: 1600,
        alt: "Imagen descriptiva grande de Register Time",
      },
    ],
    locale: "es_ES", // Ajusta esto según el idioma de tu contenido
    url: "https://menta-node.vercel.app",
  },
  robots: "index,follow",
  referrer: "no-referrer",
  generator: "Next.js 14",
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1.0",
  publisher: "Jeyson Camilo Guzman Rico",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
