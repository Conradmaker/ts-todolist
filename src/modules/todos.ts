const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;

let nextId = 0;
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {text, id: nextId++},
});
export const removeTodo = (id: number) => ({type: REMOVE_TODO, payload: id});
export const toggleTodo = (id: number) => ({type: TOGGLE_TODO, payload: id});

export type ActionType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
type TodoState = Todo[];

const initialState: TodoState = [];

const todos = (state: TodoState = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case REMOVE_TODO:
      return state.filter((v) => v.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((v) =>
        v.id === action.payload ? {...v, done: !v.done} : v
      );
    default:
      return state;
  }
};
export default todos;
