import { get, post, remove } from "../../utils/requests";
import { API_DOMAIN } from "../../const";
import { Card } from "../../types";

const url = API_DOMAIN + "/cards";

export const postCard = async (card: Omit<Card, "id">) => {
  const { data } = await post<Card>(url, card);

  return data;
};
