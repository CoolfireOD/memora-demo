import React, { FC } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useIdParam } from "../../hooks/useIdParam";
import { CARDS_QUERY_KEY } from "../recordsRoute/const";
import * as API from "./api";
import { useQuery } from "@tanstack/react-query";
import { CardInfoHeader } from "./components/CardInfoHeader";

export const CardRoute: FC = () => {
  const cardId = useIdParam();

  const { data: cardItems } = useQuery(CARDS_QUERY_KEY, API.getCards);

  const cardData = cardItems?.filter((card) => card.id === cardId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 2,
        minWidth: "50%",
      }}
    >
      {cardData && (
        <>
          <CardInfoHeader />
          <Typography
            variant="h4"
            sx={{
              fontStyle: "bold",
              fontWeight: 700,
              letterSpacing: 1,
              textIndent: "1rem",
              alignSelf: "flex-start",
            }}
          >
            Main Info
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {cardData[0].title}
              </Typography>
              <Typography variant="h6" sx={{ textIndent: "2rem" }}>
                {cardData[0].subtitle}
              </Typography>
            </Box>
            <Typography variant="h5">{cardData[0].description}</Typography>
          </Paper>
          <Typography
            variant="h4"
            sx={{
              fontStyle: "bold",
              fontWeight: 700,
              letterSpacing: 1,
              textIndent: "1rem",
              alignSelf: "flex-start",
            }}
          >
            Attached files
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          ></Paper>
        </>
      )}
    </Box>
  );
};
