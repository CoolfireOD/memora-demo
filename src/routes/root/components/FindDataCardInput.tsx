import React, { FC, useState } from "react";
import { TextField } from "@mui/material";

interface FindDataCardInputProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

export const FindDataCardInput: FC<FindDataCardInputProps> = ({
  filterText,
  onFilterTextChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onFilterTextChange(event.target.value);
  };

  return (
    <>
      <TextField
        variant="standard"
        label={"Search value"}
        placeholder={"Fill in the field to find"}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
