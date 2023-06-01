import React, { FC } from "react";
import { DataCard } from "./DataCard";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import * as API from "../api";
import { CARDS_QUERY_KEY } from "../const";
import { Card } from "../../../types";

interface DataCardsContainerProps {
  filterText: string;
}

export const DataCardsContainer: FC<DataCardsContainerProps> = ({
  filterText,
}) => {
  const { data: cardItems } = useQuery(CARDS_QUERY_KEY, API.getCards);

  const filteredCards: Card[] = [];

  cardItems?.forEach((card) => {
    if (
      card.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      card.subtitle.toLowerCase().indexOf(filterText.toLowerCase()) === -1 &&
      card.description.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    )
      return;
    filteredCards.push(card);
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: 2,
        rowGap: 2,
        justifyContent: "center",
      }}
    >
      {filteredCards?.map((card, index) => (
        <DataCard
          key={card.id}
          id={card.id}
          index={index}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
        />
      ))}
    </Box>
  );
};
