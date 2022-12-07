import React, { FC, useState } from "react";
import { FindDataCardInput } from "./components/FindDataCardInput";
import { AddDataCardButton } from "./components/AddDataCardButton";
import { DataCardsContainer } from "./components/DataCardsContainer";
import { Box } from "@mui/material";

export const RootRoute: FC = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (text: string) => {
    setFilterText(text);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
      }}
    >
      <FindDataCardInput
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
      <AddDataCardButton />
      <DataCardsContainer filterText={filterText} />
    </Box>
  );
};
