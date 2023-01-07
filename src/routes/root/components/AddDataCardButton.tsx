import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { Fab } from "@mui/material";

export const AddDataCardButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Fab
      sx={{ position: "fixed", bottom: 40, right: 40 }}
      color="primary"
      aria-label="add"
      onClick={() => {
        navigate("/create");
      }}
    >
      <AddIcon />
    </Fab>
  );
};
