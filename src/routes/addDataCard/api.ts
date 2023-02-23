import { post } from "../../utils/requests";
import { API_DOMAIN } from "../../const";
import { Card } from "../../types";

const url = API_DOMAIN + "/cards";

export const postCard = async (card: Omit<Card, "id">) => {
  console.log(card);

  const formData = new FormData();
  Array.from(card.files).forEach((file) => {
    formData.append("files", file);
  });

  fetch("/public", { method: "POST", body: formData });

  const { data } = await post<Card>(url, card);

  return data;
};
