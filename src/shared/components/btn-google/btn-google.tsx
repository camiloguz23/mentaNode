"use client";

import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function BtnGoogle() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const data = jwtDecode(credentialResponse?.credential ?? "");
        console.log(data);
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
