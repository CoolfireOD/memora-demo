import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as API from "../api";
import { Card } from "../../../types";

export const usePostCardMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = ["cards"];

  return useMutation(API.postCard, {
    onSuccess: (newCard) => {
      queryClient.setQueryData<Card[]>(queryKey, (previousData = []) => [
        ...previousData,
        newCard,
      ]);
    },
  });
};
