import { TextField } from "@mui/material";
import React, { FC } from "react";
import { FieldErrors } from "../../../../../types";

type FullNameStepProps = {
  nameRegister: any;
  surnameRegister: any;
  errors: FieldErrors;
};

export const FullNameStep: FC<FullNameStepProps> = ({
  nameRegister,
  surnameRegister,
  errors,
}) => {
  return (
    <>
      <TextField
        error={errors.name && errors.name.type ? true : false}
        helperText={errors.name && errors.name.type ? errors.name.message : ""}
        label="Name"
        {...nameRegister}
        fullWidth
      />
      <TextField
        error={errors.email && errors.surname.type ? true : false}
        helperText={
          errors.surname && errors.surname.type ? errors.surname.message : ""
        }
        label="Surname"
        {...surnameRegister}
        fullWidth
      />
    </>
  );
};
