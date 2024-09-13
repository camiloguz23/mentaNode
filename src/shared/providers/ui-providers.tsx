"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
interface Props {
  children: React.ReactNode;
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL ?? "");

export function UiProviders({ children }: Props) {
  const key = process.env.NEXT_PUBLIC_API_GOOGLE ?? "";
  return (
    <>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""}
      >
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          <GoogleOAuthProvider clientId={key}>{children}</GoogleOAuthProvider>
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  );
}
