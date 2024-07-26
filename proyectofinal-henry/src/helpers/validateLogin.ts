import { ILoginProps, ILoginPropsError } from "@/types/types";

export const validateLogin = (input: ILoginProps): ILoginPropsError => {
    const errors: ILoginPropsError = {};
    const regexLettersOnly = /^[a-zA-Z]+$/;
    const regexStrongPassword = /^[A-Za-z0-9@$!%*?&]+$/;

      if (input.username.trim().length < 1) {
        errors.username = `El campo username es obligatorio`;
      } else if (!regexLettersOnly.test(input.username)) {
        errors.username = `Carácter no admitido`;
      }

      if (input.password.trim().length < 1) {
        errors.password = `El campo password es obligatorio`;
      } else if (!regexStrongPassword.test(input.password)) {
        errors.password = `Carácter no admitido`;
      }

    return errors;
}