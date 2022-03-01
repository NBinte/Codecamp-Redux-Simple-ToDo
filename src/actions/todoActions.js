import { FETCH_TODOS, ADD_TODOS, REMOVE_TODOS } from "./types";

export const fetchTodos = () => dispatch => {
    dispatch({
        type: FETCH_TODOS
    });
}

// export const addTodos = () => dispatch => {
//     dispatch({
//         type: ADD_TODOS,
//         payload: todos
//     });
// };

// export const removeTodos = () => dispatch => {
//     dispatch({
//         type: REMOVE_TODOS,
//         payload: todos
//     });
// };