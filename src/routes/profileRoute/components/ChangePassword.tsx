import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PasswordInput } from "./PasswordInput";

type Inputs = {
    currentPassword: string;
    newPassword: string;
    repeatedPassword: string;
};

export const ChangePassword: FC = () => {
    const { register, handleSubmit, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log("submited", data);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
                "@media screen and (max-width: 1060px)": {
                    alignItems: "center",
                },
            }}
        >
            <Typography variant="h5">Change password</Typography>
            <Box
                sx={{
                    display: "flex",
                    columnGap: 2,
                    width: "100%",
                    minWidth: "240px",
                    "@media screen and (max-width: 1060px)": {
                        flexDirection: "column",
                        rowGap: 2,
                        alignItems: "center",
                    },
                }}
            >
                <PasswordInput
                    register={register("currentPassword", { required: true })}
                    label="Current password"
                />
                <PasswordInput
                    register={register("newPassword", { required: true })}
                    label="New password"
                />
                <PasswordInput
                    register={register("repeatedPassword", { required: true })}
                    label="Repeat new password"
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    columnGap: 2,
                    alignSelf: "flex-end",
                    pb: "2px",
                    "@media screen and (max-width: 1060px)": {
                        alignSelf: "center",
                    },
                }}
            >
                <Button
                    size="large"
                    variant="contained"
                    color="inherit"
                    onClick={() => {
                        reset({
                            currentPassword: "",
                            newPassword: "",
                            repeatedPassword: "",
                        });
                    }}
                >
                    Cancel
                </Button>
                <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
};
