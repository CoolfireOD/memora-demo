import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export const AddDataCardButton: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <AddIcon
        onClick={() => {
          navigate("/create");
        }}
      />
    </>
  );
};
