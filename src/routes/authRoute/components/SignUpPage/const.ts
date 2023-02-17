import { stepLabelsType } from "./types";
import { PasswordCondition } from "../../../../types";

export const stepLabels: stepLabelsType[] = [
  { label: "Login/Email", registerLabels: ["login", "email"] },
  { label: "Name/Surname", registerLabels: ["name", "surname"] },
  { label: "Personal info", registerLabels: ["birthDate", "gender"] },
  { label: "Password", registerLabels: ["password", "confirmPassword"] },
];

export const conditions: PasswordCondition[] = [
  { message: "Minimal password length is 8 characters", completed: false },
  { message: "Password must contain a lowercase letter", completed: false },
  { message: "Password must contain an uppercase letter", completed: false },
  { message: "Password must contain a special symbol", completed: false },
  { message: "Password must contain a number", completed: false },
];
