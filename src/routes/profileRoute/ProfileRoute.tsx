import { Box, Paper, Typography, Divider } from "@mui/material";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { MainInfo } from "./components/MainInfo";
import { ChangePassword } from "./components/ChangePassword";

type Inputs = {
    file: File;
};

export const ProfileRoute: FC = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: 4,
                alignSelf: "center",
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontStyle: "bold",
                    fontWeight: 700,
                    letterSpacing: 1,
                    textIndent: "1rem",
                }}
            >
                Profile
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 6,
                    padding: 6,
                    pr: 12,
                    "@media screen and (max-width: 1060px)": {
                        pr: 6,
                    },
                }}
            >
                <MainInfo />
                <Divider />
                <ChangePassword />
            </Paper>
        </Box>
    );
};
