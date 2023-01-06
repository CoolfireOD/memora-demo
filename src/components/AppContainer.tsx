import React, { FC, ReactNode } from "react";
import { Container } from "@mui/material";

type AppContainerProps = {
    children?: ReactNode;
};

export const AppContainer: FC<AppContainerProps> = ({ children }) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
            }}
        >
            {children}
        </Container>
    );
};
