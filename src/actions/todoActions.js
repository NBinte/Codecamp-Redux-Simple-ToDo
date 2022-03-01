import { FETCH_TODOS, ADD_TODOS, UPDATE_TODOS, REMOVE_TODOS } from "./types";

export const fetchTodos = () => dispatch => {
    dispatch({
        type: FETCH_TODOS
    });
}

export const addTodos = (task) => dispatch => {
    dispatch({
        type: ADD_TODOS,
        payload: task
    });
};

export const updateTodos = (tasks, task) => dispatch => {
    dispatch({
        type: UPDATE_TODOS,
        payload: [task, ...tasks]
    });
};


// export const removeTodos = () => dispatch => {
//     dispatch({
//         type: REMOVE_TODOS,
//         payload: todos
//     });
// };