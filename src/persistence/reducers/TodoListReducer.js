import { TodoListConstants } from "../constants/TodoListConstants";

const initialState = {
  status: "",
  data: {
    todoList: {},
  },
  error: {},
};

export function TodoListReducer(state = initialState, action) {
  switch (action.type) {
    case TodoListConstants.TODO_LIST_REQUEST:
      return {
        status: TodoListConstants.TODO_LIST_REQUEST,
        data: { ...state.data },
        error: {},
      };
    case TodoListConstants.TODO_LIST_SUCCESS:
      return {
        status: TodoListConstants.TODO_LIST_SUCCESS,
        data: { ...state.data, ...{ todoList: action.data.data } },
        error: {},
      };
    case TodoListConstants.TODO_LIST_FAILURE:
      return {
        status: TodoListConstants.TODO_LIST_FAILURE,
        data: { ...state.data, todoList: {} },
        error: {},
      };
    default:
      return state;
  }
}
