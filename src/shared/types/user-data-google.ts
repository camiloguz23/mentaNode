export interface UserDataGoogle {
  sub: string; // Identificador único del usuario
  name: string; // Nombre completo del usuario
  given_name: string; // Nombre de pila del usuario
  family_name: string; // Apellido del usuario
  picture: string; // URL de la imagen del perfil del usuario
  email: string; // Dirección de correo electrónico del usuario
  email_verified: boolean; // Indicador de si el correo electrónico ha sido verificado
  iat: number; // Timestamp de la emisión del token (Issued At)
  exp: number; // Timestamp de la expiración del token (Expiration Time)
}
