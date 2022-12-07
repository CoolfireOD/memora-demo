import React, { FC } from "react";
import { IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const AddDataCardButton: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        onClick={() => {
          navigate("/create");
        }}
        sx={{
          position: "fixed",
          bottom: 15,
          right: 15,
        }}
      >
        <AddIcon></AddIcon>
      </IconButton>
    </>
  );
};
