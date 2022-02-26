import { ADD_TODOS, REMOVE_TODOS } from "../../actions/types";

const initialState = {
    todos: [
        {id: 1, name: "task1"},
        {id: 2, name: "task2"}
    ],
    todo: {id:3, name: "task3"}
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state, 
            };

        case REMOVE_TODOS:
            return {
                ...state,
            };
    }
};

export default todosReducer;