import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card } from "../../../types";
import * as API from "../api";

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = ["cards"];

  return useMutation<
    void,
    unknown,
    string,
    { previousCards: Card[] | undefined }
  >(API.deleteCard, {
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries({ queryKey });

      const previousCards = queryClient.getQueryData<Card[]>(queryKey);

      queryClient.setQueryData<Card[]>(queryKey, (previousCards) => {
        return previousCards!.filter((previous) => previous.id !== deletedId);
      });

      return { previousCards };
    },
    onError: (err, newCard, context) => {
      queryClient.setQueryData<Card[]>(queryKey, context!.previousCards);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
