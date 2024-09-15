"use client";

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { encrypt, IconGoogle, useBookStore } from "@/shared/store";
import style from "./google.module.css";
import { deleteCookie, setCookies } from "@/actions/cookies";

export function BtnGoogle() {
  const { setDataUser, books } = useBookStore((store) => store);
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`, // Aquí va el Access Token
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }
          return response.json();
        })
        .then(async (data) => {
          const token = await encrypt(data);
          setCookies("token", token);
          setDataUser({
            name: data.name,
            email: data.email,
            img: data.picture,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });
  return (
    <>
      {!books.email ? (
        <button className={style.login} onClick={() => login()}>
          <IconGoogle />
          Iniciar Sesion
        </button>
      ) : (
        <button
          className={style.login}
          onClick={() => {
            deleteCookie("token");
          }}
        >
          <IconGoogle />
          Cerrar Sesion
        </button>
      )}
    </>
  );
}
