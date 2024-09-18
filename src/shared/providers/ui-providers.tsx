"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ConvexProvider, ConvexReactClient } from "convex/react";
interface Props {
  children: React.ReactNode;
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "");

export function UiProviders({ children }: Props) {
  const key = process.env.NEXT_PUBLIC_API_GOOGLE ?? "";
  return (
    <>
      <ConvexProvider client={convex}>
        <GoogleOAuthProvider clientId={key}>{children}</GoogleOAuthProvider>
      </ConvexProvider>
    </>
  );
}
