import React, { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

type CardInfoContentPaperProps = {
  title: string;
  text: string;
};

export const CardInfoContentPaper: FC<CardInfoContentPaperProps> = ({
  title,
  text,
}) => {
  return (
    <Paper
      sx={{
        width: "100%",
        px: 3,
        py: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography variant="h5">
          {title}: {text}
        </Typography>
      </Box>
    </Paper>
  );
};
