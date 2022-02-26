import { ADD_TODOS, REMOVE_TODOS } from "./types";

export const addTodos = (todos=[], todo={}) => dispatch => {
    dispatch({
        type: ADD_TODOS,
        payload: todos
    });
};

export const removeTodos = (todos = [], todo = {}) => dispatch => {
    dispatch({
        type: REMOVE_TODOS,
        payload: todos
    });
};