import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";

// 규칙3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야 합니다.
export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";

// 규칙2. 항상 모듈의 action 생성자들을 함수형태로 export 해야 합니다.
// export const setTodo = (payload: TodoType[]) => {
//   return {
//     type: INIT_TODO_LIST,
//     payload
//   };
// };

// export const todoActions = { setTodo };

interface TodoReduxState {
    todos: TodoType[];
}

const initialState: TodoReduxState = {
  todos: []
};

// 규칙1. 항상 reducer()란 이름의 함수를 export default 해야 합니다.
// export default function reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case INIT_TODO_LIST:
//       const newState = { ...state, todos: action.payload };
//       return newState;
//     default:
//       return state;
//   }
// }

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    }
  }
});

export const todoActions = { ...todo.actions };
export default todo;
