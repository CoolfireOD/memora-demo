import React, { FC } from "react";
import { TextField } from "@mui/material";

type MainInputProps = {
    label?: string;
    defaultValue?: string;
    register: any;
};

export const MainInput: FC<MainInputProps> = ({
    label,
    defaultValue,
    register,
}) => {
    return (
        <TextField
            {...register}
            label={label || ""}
            defaultValue={defaultValue || ""}
            sx={{
                width: "45%",
                minWidth: "240px",
            }}
        />
    );
};
