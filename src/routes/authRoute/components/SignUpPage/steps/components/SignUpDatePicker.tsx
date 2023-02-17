import { TextField } from "@mui/material";
import React, { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Dayjs } from "dayjs";

type SignUpDatePickerProps = {
  birthDate: Dayjs | null;
  handleChange: (value: Dayjs | null) => void;
};

export const SignUpDatePicker: FC<SignUpDatePickerProps> = ({
  birthDate,
  handleChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        disableFuture
        label="Birth date"
        inputFormat="DD/MM/YYYY"
        value={birthDate}
        onChange={handleChange}
        renderInput={(props) => <TextField {...props} fullWidth />}
      />
    </LocalizationProvider>
  );
};
