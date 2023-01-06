import React, { FC, useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
                sx={{ width: "100%" }}
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
