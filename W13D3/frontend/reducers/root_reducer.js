// import merge from "lodash/mege";
import { combineReducers } from "redux";
import todosReducer from "./todos_reducer";



const rootReducer = (state = {}, action) => {
    // debugger;
    return {
        todos: todosReducer(state.todos, action),
      

    };
};


// const rootReducer = combineReducers({

// });

export default rootReducer;