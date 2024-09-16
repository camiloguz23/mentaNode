import { NextResponse, NextRequest } from "next/server";
import { decryptAndVerify } from "./shared";
// Middleware para proteger rutas
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token"); // Suponiendo que el token se guarda en las cookies

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirige a la página de login si no hay token
  }

  const verifiedToken = await decryptAndVerify(token.value);

  if (!verifiedToken) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirige si el token no es válido
  }

  return NextResponse.next(); // Si el token es válido, permite el acceso a la ruta
}

// Configuración para definir las rutas a proteger
export const config = {
  matcher: ["/book/:path*"], // Protege estas rutas
};
