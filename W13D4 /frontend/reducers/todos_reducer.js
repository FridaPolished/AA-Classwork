import { RECEIVE_TODOS } from '../actions/todo_actions';
import  { RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TODO: 
            let newTodo = action.todo;
            debugger;
            return Object.assign({}, state, {[newTodo.id]: newTodo});

        case RECEIVE_TODOS:
            let todoHash = {};
            action.todos.forEach( (todo) => {
                todoHash[todo.id] = todo;
            });
            // debugger;
            return todoHash;
        default:
            return state;
    };
};

export default todosReducer;