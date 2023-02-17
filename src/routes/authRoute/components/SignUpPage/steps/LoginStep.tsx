import { TextField } from "@mui/material";
import React, { FC } from "react";
import { FieldErrors } from "../../../../../types";

type LoginStepProps = {
  loginRegister: any;
  emailRegister: any;
  errors: FieldErrors;
};

export const LoginStep: FC<LoginStepProps> = ({
  loginRegister,
  emailRegister,
  errors,
}) => {
  return (
    <>
      <TextField
        error={errors.login && errors.login.type ? true : false}
        helperText={
          errors.login && errors.login.type ? errors.login.message : ""
        }
        label="Login"
        type=""
        {...loginRegister}
        fullWidth
      />
      <TextField
        error={errors.email && errors.email.type ? true : false}
        helperText={
          errors.email && errors.email.type ? errors.email.message : ""
        }
        label="Email"
        type="email"
        {...emailRegister}
        fullWidth
      />
    </>
  );
};
