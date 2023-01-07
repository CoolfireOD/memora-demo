import {
    Box,
    Button,
    Select,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    FormControl,
} from "@mui/material";
import React, { FC, useState } from "react";
import { ProfileAvatar } from "../../../components/ProfileAvatar";
import { useForm } from "react-hook-form";
import { MainInput } from "./MainInput";

type Inputs = {
    login: string;
    name: string;
    surname: string;
    file: File;
};

type Gender = "male" | "female" | "none";

export const MainInfo: FC = () => {
    const [gender, setGender] = useState<Gender>("none");
    const { register } = useForm<Inputs>();

    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value as Gender);
    };

    return (
        <Box
            sx={{
                display: "flex",
                columnGap: 6,
                position: "relative",
                "@media screen and (max-width: 1060px)": {
                    flexDirection: "column",
                    rowGap: 2,
                    alignItems: "center",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                    alignItems: "center",
                }}
            >
                <ProfileAvatar
                    customHeight="230px"
                    customWidth="230px"
                ></ProfileAvatar>
                <Button component="label">
                    Edit photo
                    <input
                        {...register("file")}
                        type="file"
                        accept="image/*"
                        hidden
                    />
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    width: "100%",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    rowGap: 2,
                    height: "fit-content",
                    "@media screen and (max-width: 1060px)": {
                        justifyContent: "center",
                    },
                }}
            >
                <MainInput
                    register={register("login")}
                    label="Login"
                    defaultValue={"mz_lam"}
                />
                <MainInput
                    register={register("name")}
                    label="Name"
                    defaultValue={"Mychailo"}
                />
                <MainInput
                    register={register("surname")}
                    label="Surname"
                    defaultValue={"Zinenko"}
                />
                <FormControl
                    fullWidth
                    sx={{
                        width: "45%",
                        minWidth: "240px",
                    }}
                >
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select
                        labelId="gender-select-label"
                        label="Gender"
                        value={gender}
                        onChange={handleChange}
                    >
                        <MenuItem value={"none"}>None</MenuItem>
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    columnGap: 2,
                    alignItems: "flex-end",
                    position: "absolute",
                    bottom: "2px",
                    right: 0,
                    "@media screen and (max-width: 1060px)": {
                        position: "static",
                    },
                }}
            >
                <Button size="large" variant="contained" color="inherit">
                    Cancel
                </Button>
                <Button size="large" variant="contained" color="primary">
                    Save
                </Button>
            </Box>
        </Box>
    );
};
