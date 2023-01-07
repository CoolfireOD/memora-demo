import { get, remove } from "../../utils/requests";
import { API_DOMAIN } from "../../const";
import { Card } from "../../types";

const url = API_DOMAIN + "/cards";

type ResponseData = Array<Card>;

export const getCards = async () => {
  const { data } = await get<ResponseData>(url);

  return data;
};

export const deleteCard = async (itemId: string) => {
  await remove(`${url}/${itemId}`);
};
