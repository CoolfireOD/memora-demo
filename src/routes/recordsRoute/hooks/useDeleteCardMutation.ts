import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card } from "../../../types";
import * as API from "../api";
import { useNotifications } from "../../../components/NotificationsProvider";
import { UNEXPECTED_ERROR_MESSAGE } from "../../../const";

export const useDeleteCardMutation = () => {
  const queryClient = useQueryClient();
  const queryKey = ["cards"];

  const { push } = useNotifications();
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
    onSuccess() {
      push({ message: "Successfully deleted", type: "success", delay: 3000 });
    },
    onError: (err, newCard, context) => {
      queryClient.setQueryData<Card[]>(queryKey, context!.previousCards);
      push({ message: UNEXPECTED_ERROR_MESSAGE, type: "error", delay: 3000 });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};
