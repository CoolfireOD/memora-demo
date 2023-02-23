import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

type ConditionItemProps = {
  message: string;
  completed: boolean;
};

export const ConditionItem: FC<ConditionItemProps> = ({
  message,
  completed,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: 1,
        alignItems: "center",
      }}
    >
      {completed ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
      <Typography>{message}</Typography>
    </Box>
  );
};
