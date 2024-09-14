"use server";

import { createSecretKey } from "crypto";
import { SignJWT, jwtVerify } from "jose";

const secret = createSecretKey(Buffer.from(process.env.JWT_SECRET ?? ""));

export const encrypt = async (payload: any) => {
  const signJWT = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" }) // Algoritmo de firma
    .setIssuedAt() // Timestamp actual
    .setExpirationTime("7h") // Expiración en 7 horas
    .sign(secret); // Firmar con la clave secreta

  return signJWT;
};

export const decryptAndVerify = async (token: string) => {
  const { payload } = await jwtVerify(token, secret, {
    algorithms: ["HS256"], // Algoritmo esperado
  }).catch((error) => ({ payload: null }));

  return payload;
};
