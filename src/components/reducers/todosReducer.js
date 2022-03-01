import { FETCH_TODOS, ADD_TODOS, REMOVE_TODOS } from "../../actions/types";

const initialState = {
    tasks: [
        { id: 1, name: "task1" },
        { id: 2, name: "task2" }
    ],
    task: { id: 3, name: "task3" }
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TODOS:
            return state;


        // case ADD_TODOS:
        //     return {
        //         ...state,
        //     };

        // case REMOVE_TODOS:
        //     return {
        //         ...state,
        //     };

        default:
            return state;
    }
};

export default todosReducer;