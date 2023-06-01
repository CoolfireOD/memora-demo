import React, { FC, useState } from "react";
import {
  Box,
  IconButton,
  Card,
  CardContent,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDeleteCardMutation } from "../hooks/useDeleteCardMutation";
import { useNavigate } from "react-router-dom";

interface DataCardProps {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  description: string;
}

export const DataCard: FC<DataCardProps> = ({
  id,
  index,
  title,
  subtitle,
  description,
}) => {
  const navigate = useNavigate();

  const { mutate: deleteCard } = useDeleteCardMutation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <>
      <Card
        sx={{
          width: 275,
          border: "1px solid black",
          position: "relative",
          ":hover": {
            boxShadow: "0px 5px 20px -2px rgba(0,0,0,0.75)",
            zIndex: 500,
          },
          borderRadius: 4,
        }}
        onDoubleClick={() => {
          navigate(`/${id}`);
        }}
      >
        <CardContent>
          <Typography
            sx={{
              fontSize: 14,
              mb: 0,
              fontWeight: "bold",
              color: "#777",
              textTransform: "uppercase",
            }}
            color="text.secondary"
            gutterBottom
          >
            Data Card #{index + 1}
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
              color: "#777",
            }}
            onClick={handleOpen}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ mt: 1, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5, color: "#777" }} variant="subtitle1">
            {subtitle}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#555",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
            p: 4,
            maxWidth: 400,
            width: "90%",
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#777777",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h2"
            sx={{ mt: 2, fontWeight: "bold", color: "#333333" }}
          >
            Are you sure you want to delete this note?
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{
              mt: 2,
              px: 2,
              py: 1,
              color: "#ffffff",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 8,
              width: "150px",
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Box>
      </Modal>
    </>
  );
};
