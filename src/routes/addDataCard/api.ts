import { post } from "../../utils/requests";
import { API_DOMAIN } from "../../const";
import { Card } from "../../types";

const url = API_DOMAIN + "/cards";

export const postCard = async (card: Omit<Card, "id">) => {
  console.log(card);

  console.log(card.file);

  const formData = new FormData();
  formData.append('file', card.file);

  fetch('./upload', {method: "POST", body: formData })

  const { data } = await post<Card>(url, card);

  return data;
};
