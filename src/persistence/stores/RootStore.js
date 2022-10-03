import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { TodoListReducer } from "../reducers/TodoListReducer";

const allReducers = combineReducers({
    TodoListReducer
});

const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware)
);

export default applicationStore;
