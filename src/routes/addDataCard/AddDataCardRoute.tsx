import React, { FC } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePostCardMutation } from "./hooks/usePostCardMutation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  subtitle: string;
  description: string;
};

export const AddDataCardRoute: FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<Inputs>();

  const { mutate: postCard } = usePostCardMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.description.trim() === "") return;

    postCard({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
    });

    navigate("/");
    console.log("norm");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            alignSelf: "center",
          }}
        >
          Create new card
        </Typography>
        <TextField
          label="Card title"
          variant="standard"
          placeholder="Fill in and press enter"
          defaultValue={watch("title")}
          {...register("title", { required: true })}
          fullWidth
        />
        <TextField
          label="Card subtitle"
          variant="standard"
          placeholder="Fill in and press enter"
          defaultValue={watch("subtitle")}
          {...register("subtitle", { required: true })}
          fullWidth
        />
        <TextField
          label="Card description"
          variant="outlined"
          placeholder="Fill in and press enter"
          defaultValue={watch("description")}
          {...register("description")}
          fullWidth
          multiline
          rows={4}
        />
        <Box
          sx={{
            display: "flex",
            columnGap: 2,
            alignSelf: "center",
          }}
        >
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  );
};
