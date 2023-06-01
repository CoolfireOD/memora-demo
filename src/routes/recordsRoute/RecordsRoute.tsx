import React, { FC, useState } from "react";
import { FindDataCardInput } from "./components/FindDataCardInput";
import { DataCardsContainer } from "./components/DataCardsContainer";
import { Box } from "@mui/material";

export const RecordsRoute: FC = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (text: string) => {
    setFilterText(text);
  };

  return (
    <Box
      sx={{
        pb: 4,
        display: "flex",
        flexDirection: "column",
        rowGap: 4,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", columnGap: 2 }}>
        <FindDataCardInput onFilterTextChange={handleFilterTextChange} />
      </Box>
      <DataCardsContainer filterText={filterText} />
    </Box>
  );
};
