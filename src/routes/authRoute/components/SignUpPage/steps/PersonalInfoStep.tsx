import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Dayjs } from "dayjs";
import React, { FC } from "react";
import { SignUpDatePicker } from "./components/SignUpDatePicker";
import { FieldErrors } from "../../../../../types";

type PersonalInfoStepProps = {
  birthDate: Dayjs | null;
  handleBirthChange: (value: Dayjs | null) => void;
  genderValue: string;
  genderRegister: any;
  errors: FieldErrors;
};

export const PersonalInfoStep: FC<PersonalInfoStepProps> = ({
  birthDate,
  handleBirthChange,
  genderValue,
  genderRegister,
}) => {
  return (
    <>
      <SignUpDatePicker
        birthDate={birthDate}
        handleChange={handleBirthChange}
      />
      <FormControl fullWidth>
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          {...genderRegister}
          labelId="gender-select-label"
          label="Gender"
          defaultValue={genderValue || "none"}
        >
          <MenuItem value={"none"}>None</MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
