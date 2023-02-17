import React, { FC } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import PopupState, { bindFocus, bindPopover } from "material-ui-popup-state";
import { PasswordCondition } from "../../types";
import { PasswordCheckPopover } from "./components/PasswordCheckPopover";
import { passwordMeterColors } from "./const";
import { FieldErrors } from "../../types";

type PasswordInputProps = {
  label?: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  register: any;
  errors?: FieldErrors | null;
  strengthCheck?: { enable: boolean; strength: number };
  conditions?: PasswordCondition[];
};

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  variant,
  register,
  errors = null,
  strengthCheck = { enable: false, strength: 0 },
  conditions = [],
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <>
          <TextField
            error={
              errors?.[register.name] && errors?.[register.name].type
                ? true
                : false
            }
            helperText={
              errors?.[register.name] && errors?.[register.name].type
                ? errors?.[register.name].message
                : ""
            }
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
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            {...bindFocus(popupState)}
          />
          {strengthCheck.enable && (
            <PasswordCheckPopover
              bindPopover={bindPopover(popupState)}
              conditions={conditions}
              strength={strengthCheck.strength}
              colors={passwordMeterColors}
            />
          )}
        </>
      )}
    </PopupState>
  );
};
