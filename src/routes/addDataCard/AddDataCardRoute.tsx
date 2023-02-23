import React, { FC } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Stack,
  LinearProgress,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePostCardMutation } from "./hooks/usePostCardMutation";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkType } from "./utils/checkType";
import { IconContext } from "react-icons/lib";
import CloseIcon from "@mui/icons-material/Close";

type Inputs = {
  title: string;
  subtitle: string;
  description: string;
  files: FileList;
};

export const AddDataCardRoute: FC = () => {
  const navigate = useNavigate();

  const [files, setFiles] = React.useState<File[]>([]);

  const { register, handleSubmit, watch } = useForm<Inputs>();

  const { mutate: postCard } = usePostCardMutation();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.description.trim() === "") return;

    postCard({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      files: data.files,
    });

    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.files ||
      [...files, ...Array.from(e.target.files)].reduce(
        (acc, file) => acc + file.size,
        0
      ) >
        15 * 1024 ** 2
    )
      return;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files!)]);
  };

  const handleRemove = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        width: "100%",
        maxWidth: "1000px",
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
      <Typography
        variant="h4"
        sx={{
          fontStyle: "bold",
          fontWeight: 700,
          letterSpacing: 1,
          textIndent: "1rem",
          alignSelf: "flex-start",
        }}
      >
        Main Info
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
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
      </Paper>
      <Typography
        variant="h4"
        sx={{
          fontStyle: "bold",
          fontWeight: 700,
          letterSpacing: 1,
          textIndent: "1rem",
          alignSelf: "flex-start",
        }}
      >
        Attach files
      </Typography>
      <Paper
        elevation={3}
        sx={{
          p: 6,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{ maxWidth: "300px" }}
              component="label"
            >
              Upload File
              <input
                type="file"
                multiple
                {...register("files")}
                onChange={handlePick}
                hidden
              />
            </Button>
            <Typography variant="h6">
              {files.length} files selected |&nbsp;
              {(
                files.reduce((acc, file) => acc + file.size, 0) /
                1024 ** 2
              ).toPrecision(2)}
              /15&nbsp; MB
            </Typography>
          </Box>
          {console.log(files)}
          <Stack spacing={2}>
            {files.map((file, index) => (
              <Box
                key={Date.now() + index}
                sx={{
                  display: "flex",
                  columnGap: 3,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconContext.Provider value={{ color: "blue", size: "1.5rem" }}>
                  {checkType(file.type)}
                </IconContext.Provider>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "250px",
                  }}
                >
                  {file.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={0}
                  sx={{ width: "100%", maxWidth: "350px" }}
                />
                <Typography variant="h6" sx={{ textIndent: "2rem" }}>
                  {(file.size / 1024 ** 2).toPrecision(2)} MB
                </Typography>
                <IconButton onClick={() => handleRemove(index)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ))}
          </Stack>
        </>
      </Paper>
      <Box
        sx={{
          display: "flex",
          columnGap: 2,
          justifyContent: "space-between",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", columnGap: 2 }}>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
