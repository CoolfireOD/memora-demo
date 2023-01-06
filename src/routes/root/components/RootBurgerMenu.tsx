import React, { FC } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from "@mui/material";
import { AddDataCardButton } from "./AddDataCardButton";
import { ChangeThemeButton } from "./ChangeThemeButton";

const actions = [
    { icon: <AddDataCardButton />, name: "Add" },
    { icon: <ChangeThemeButton />, name: "Change theme" },
];

export const RootBurgerMenu: FC = () => {
    return (
        <Box
            sx={{
                height: 320,
                transform: "translateZ(0px)",
                flexGrow: 1,
                position: "fixed",
                bottom: 15,
                right: 15,
                zIndex: 5000,
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
};
