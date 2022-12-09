import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as API from "../api";
import { Card } from "../../../types";
import { useNotifications } from "../../../components/NotificationsProvider";
import { UNEXPECTED_ERROR_MESSAGE } from "../../../const";

export const usePostCardMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = ["cards"];
  const { push } = useNotifications();

  return useMutation(API.postCard, {
    onSuccess: (newCard) => {
      queryClient.setQueryData<Card[]>(queryKey, (previousData = []) => [
        ...previousData,
        newCard,
      ]);
      push({ message: "Successfully added", type: "success", delay: 3000 });
    },
    onError() {
      push({ message: UNEXPECTED_ERROR_MESSAGE, type: "error", delay: 3000 });
    },
  });
};
