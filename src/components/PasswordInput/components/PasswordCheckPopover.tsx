import { Popover, Stack, LinearProgress } from "@mui/material";
import React, { FC } from "react";
import { ConditionItem } from "./ConditionItem";
import { PasswordCondition } from "../../../types";
import { PasswordMeterColors } from "../types";
import { PopoverReference, PopoverPosition } from "@mui/material/Popover";

type PasswordCheckPopoverProps = {
  bindPopover: {
    id?: string;
    anchorEl?: Element | null;
    anchorPosition?: PopoverPosition;
    anchorReference: PopoverReference;
    open: boolean;
    onClose: () => void;
    onMouseLeave: (event: React.MouseEvent<Element, MouseEvent>) => void;
    disableAutoFocus?: boolean;
    disableEnforceFocus?: boolean;
    disableRestoreFocus?: boolean;
  };
  strength: number;
  colors: PasswordMeterColors[];
  conditions: PasswordCondition[];
};

export const PasswordCheckPopover: FC<PasswordCheckPopoverProps> = ({
  bindPopover,
  conditions,
  strength,
  colors,
}) => {
  return (
    <Popover
      {...bindPopover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Stack
        sx={{
          maxWidth: "400px",
          width: "100%",
          p: 2,
        }}
        spacing={1}
      >
        <LinearProgress
          variant="determinate"
          value={strength * 20}
          color={colors[strength]}
        />
        {conditions.map((item, index) => (
          <ConditionItem
            key={index}
            message={item.message}
            completed={item.completed}
          />
        ))}
      </Stack>
    </Popover>
  );
};
