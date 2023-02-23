import { TextField } from "@mui/material";
import React, { FC } from "react";
import { PasswordInput } from "../../../../../components/PasswordInput/PasswordInput";
import { FieldErrors, PasswordCondition } from "../../../../../types";

type PasswordStepProps = {
  passwordRegister: any;
  passwordConfirmRegister: any;
  errors: FieldErrors;
  passwordStrength: number;
  conditions: PasswordCondition[];
};

export const PasswordStep: FC<PasswordStepProps> = ({
  passwordRegister,
  passwordConfirmRegister,
  errors,
  passwordStrength,
  conditions,
}) => {
  return (
    <>
      <PasswordInput
        register={passwordRegister}
        errors={errors}
        label="Password"
        strengthCheck={{ enable: true, strength: passwordStrength }}
        conditions={conditions}
      />
      <TextField
        error={
          errors.confirmPassword && errors.confirmPassword.type ? true : false
        }
        helperText={
          errors.confirmPassword && errors.confirmPassword.type
            ? errors.confirmPassword.message
            : ""
        }
        {...passwordConfirmRegister}
        label="Confirm password"
        type="password"
        fullWidth
      />
    </>
  );
};
