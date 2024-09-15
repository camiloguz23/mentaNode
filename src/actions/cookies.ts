"use server";

import { cookies } from "next/headers";

export const setCookies = (key: string, value: string) => {
  cookies().set(key, value, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 60 * 60 * 1000),
    sameSite: "strict",
  });
};

export const getCookie = (key: string) => {
  const cookie = cookies();
  const value = cookie.get(key);
  return value?.value;
};

export const deleteCookie = (key: string) => {
  cookies().delete(key);
};
