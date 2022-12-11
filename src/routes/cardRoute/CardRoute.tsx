import React, { FC } from "react";
import { Box } from "@mui/material";
import { useIdParam } from "../../hooks/useIdParam";
import { CARDS_QUERY_KEY } from "../root/const";
import * as API from "./api";
import { useQuery } from "@tanstack/react-query";
import { CardInfoContent } from "./components/CardInfoContent";
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
        rowGap: 4,
        minWidth: "50%",
        alignSelf: "center",
      }}
    >
      {cardData && (
        <>
          <CardInfoHeader />
          <CardInfoContent
            title={cardData[0].title}
            subtitle={cardData[0].subtitle}
            description={cardData[0].description}
          />
        </>
      )}
    </Box>
  );
};
