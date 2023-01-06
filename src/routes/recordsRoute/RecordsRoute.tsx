import React, { FC, useState } from "react";
import { FindDataCardInput } from "./components/FindDataCardInput";
import { DataCardsContainer } from "./components/DataCardsContainer";
import { Box } from "@mui/material";
import { AdditionalIcons } from "./components/AdditionalIcons";

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
                <FindDataCardInput
                    filterText={filterText}
                    onFilterTextChange={handleFilterTextChange}
                />
                <AdditionalIcons></AdditionalIcons>
            </Box>
            <DataCardsContainer filterText={filterText} />
        </Box>
    );
};
