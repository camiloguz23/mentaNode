"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
interface Props {
  children: React.ReactNode;
}

export function UiProviders({ children }: Props) {
  const key = process.env.NEXT_PUBLIC_API_GOOGLE ?? "";
  return (
    <>
      <GoogleOAuthProvider clientId={key}>{children}</GoogleOAuthProvider>
    </>
  );
}
