"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useBookStore } from "@/shared/store";

export function BtnGoogle() {
  const { setDataUser } = useBookStore((store) => store);
  return (
    <GoogleLogin
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
    />
  );
}
