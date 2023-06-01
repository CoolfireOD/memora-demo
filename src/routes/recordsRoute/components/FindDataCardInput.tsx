import React, { FC, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface FindDataCardInputProps {
  onFilterTextChange: (text: string) => void;
}

export const FindDataCardInput: FC<FindDataCardInputProps> = ({
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
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "24px",
          },
          "& .MuiInputLabel-root": {
            color: "#777777",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#777777",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#777777",
            },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#777777",
          },
          "& .MuiOutlinedInput-root.Mui-focused:hover .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#777777",
            },
          "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: "0",
          },
          "& .MuiSvgIcon-root": {
            fill: "#777777",
          },
        }}
        size="small"
        variant="outlined"
        label={"Search value"}
        placeholder={"Fill in the field to find"}
        value={value}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};
