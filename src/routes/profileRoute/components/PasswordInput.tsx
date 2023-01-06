import React, { FC } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton, TextField } from "@mui/material";

type PasswordInputProps = {
    label?: string;
    variant?: "standard" | "filled" | "outlined" | undefined;
    register: any;
};

export const PasswordInput: FC<PasswordInputProps> = ({
    label,
    variant,
    register,
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <TextField
            {...register}
            label={label || ""}
            variant={variant || undefined}
            type={showPassword ? "text" : "password"}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            fullWidth
        />
    );
};
