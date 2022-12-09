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
        sx={{ width: 275, border: "1px solid black", position: "relative" }}
      >
        <CardContent>
          <Button
            sx={{
              px: 0,
              py: 0,
            }}
            onClick={() => {
              console.log("some tags");
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Data Card #{index + 1}
            </Typography>
          </Button>
          <IconButton
            sx={{
              position: "absolute",
              right: 5,
              top: 5,
            }}
            onClick={handleOpen}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
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
            bgcolor: "background.paper",
            border: "1px black solid",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" sx={{ mt: 1 }}>
            Are you sure you want to delete this note?
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Modal>
    </>
  );
};
