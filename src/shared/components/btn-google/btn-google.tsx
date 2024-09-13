"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { IconGoogle, useBookStore } from "@/shared/store";
import { useConvexAuth } from "convex/react";
import {
  SignInButton,
  SignOutButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import style from "./google.module.css";

export function BtnGoogle() {
  const { setDataUser } = useBookStore((store) => store);
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { sessionId } = useAuth();
  return (
    <>
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <button className={style.login}>
            <IconGoogle />
            Iniciar Sesion
          </button>
        </SignInButton>
      )}
      {isAuthenticated && (
        <SignOutButton
          redirectUrl="/"
          signOutOptions={{ sessionId: sessionId! }}
        >
          <button className={style.login}>
            <IconGoogle />
            Cerrar Sesion
          </button>
        </SignOutButton>
      )}
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          const data = jwtDecode(credentialResponse?.credential ?? "");
          const { name, picture, email } = data as any;
          setDataUser({ name, email, img: picture });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        size="medium"
        context="signin"
        shape="circle"
      /> */}
    </>
  );
}
