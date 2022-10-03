import { commonApi } from "../api/CommonApi";

export const TodoListService = {
  getTodoList,
};

async function getTodoList(url, data) {
  return await commonApi.get(url, data);
}
