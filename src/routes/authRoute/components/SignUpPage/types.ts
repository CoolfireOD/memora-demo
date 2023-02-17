export type stepLabelsType = {
  label: string;
  registerLabels: (
    | "login"
    | "email"
    | "name"
    | "surname"
    | "birthDate"
    | "gender"
    | "password"
    | "confirmPassword"
  )[];
};
