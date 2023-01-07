import React, { FC } from "react";
import { CardInfoContentPaper } from "./CardInfoContentPaper";
import { Box } from "@mui/material";

type CardInfoContentProps = {
  title: string;
  subtitle: string;
  description: string;
};

export const CardInfoContent: FC<CardInfoContentProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        width: "100%",
      }}
    >
      <CardInfoContentPaper title={"Card title"} text={title} />
      <CardInfoContentPaper title={"Card subtitle"} text={subtitle} />
      <CardInfoContentPaper title={"Card description"} text={description} />
    </Box>
  );
};
