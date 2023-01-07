import React, { FC } from "react";
import { Box, Divider, Link, IconButton } from "@mui/material";
import { ProfileAvatar } from "../../../components/ProfileAvatar";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

export const MainNav: FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "40%",
                maxWidth: "75px",
                height: "inherit",
                boxShadow: "2px 0px 10px 0px rgba(0,0,0,0.75)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 4,
                "@media screen and (max-width: 600px)": {
                    display: "none",
                },
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                }}
            >
                <IconButton
                    onClick={() => {
                        navigate("/");
                    }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "56px",
                    }}
                >
                    <HomeIcon color="action" />
                </IconButton>
                <Divider />
                <IconButton
                    onClick={() => {
                        navigate("/profile");
                    }}
                    sx={{
                        textDecoration: "none",
                    }}
                >
                    <ProfileAvatar />
                </IconButton>
            </Box>
        </Box>
    );
};
