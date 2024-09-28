"use client";

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { encrypt, IconGoogle, useBookStore } from "@/shared/store";
import style from "./google.module.css";
import { deleteCookie, setCookies } from "@/actions/cookies";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export function BtnGoogle() {
  const { setDataUser, books } = useBookStore((store) => store);
  const onLoginRegisterUser = useMutation(api.query.onAddUser);
  const route = useRouter();
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
          const user = await onLoginRegisterUser({
            name: data.name,
            email: data.email,
            img: data.picture,
            type: "google",
          });

          setDataUser({
            name: data.name,
            email: data.email,
            img: data.picture,
            section: user?.section ?? [],
            category: user?.category ?? [],
            books: user?.books ?? [],
          });
        })
        .catch(() => {
          throw new Error("error en el login");
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
          onClick={async () => {
            const routeBack = await deleteCookie("token");
            route.push(routeBack);
          }}
        >
          <IconGoogle />
          Cerrar Sesion
        </button>
      )}
    </>
  );
}
