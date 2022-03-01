import { FETCH_TODOS, ADD_TODOS, UPDATE_TODOS } from "../../actions/types";

const initialState = {
    tasks: [
    ],
    task: {}
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TODOS:
            return state;


        case ADD_TODOS:
            return {
                ...state,
                task: action.payload
            };

        case UPDATE_TODOS:
            return {
                ...state,
                tasks: action.payload
            };

        default:
            return state;
    }
};

export default todosReducer;