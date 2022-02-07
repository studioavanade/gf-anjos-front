import { FirebaseError } from "firebase/app";

// https://firebase.google.com/docs/reference/rest/auth?hl=cs
export const getApiErrorMessages = (defaultMsg: string): string => {
  switch (defaultMsg) {
    case "EMAIL_EXISTS":
      return "E-mail já em uso.";
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      return "Quantidade máxima de tentativas excedida.";
    case "EMAIL_NOT_FOUND":
    case "INVALID_PASSWORD":
      return "Usuário ou senha inválida!";
    case "USER_DISABLED":
      return "Usuário bloqueado.";
    default:
      return "Erro ao realizar operação.";
  }
};

export const getMessageFromFirebaseError = (error: FirebaseError): string => {
  const err = (error.customData?._tokenResponse as any).error.message as string;
  return getApiErrorMessages(err);
};
