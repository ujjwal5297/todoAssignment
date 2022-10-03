import { RequestConstant, ResponseConstant } from "../constants/CommonConstant";
import { TodoListService } from "../services/TodoListService";
import { TodoListConstants } from "../constants/TodoListConstants";

export const TodoListAction = {
  getTodoList,
};

function getTodoList(url, data) {
  return async (dispatch) => {
    dispatch(RequestConstant(TodoListConstants.TODO_LIST_REQUEST, data));
    const result = await TodoListService.getTodoList(url, data);
    dispatch(
      ResponseConstant(
        TodoListConstants.TODO_LIST_SUCCESS,
        TodoListConstants.TODO_LIST_FAILURE
      )
    );
    return result;
  };
}
