import { FieldValues, DeepMap, FieldError } from "react-hook-form";

export type Card = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  files: FileList;
};

export type Gender = "male" | "female" | "none";

export type PasswordCondition = {
  message: string;
  completed: boolean;
};

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;
