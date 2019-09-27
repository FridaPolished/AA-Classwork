

// let nextId = 0;
export const receiveTodos = (todos) => {
    // nextId ++;
    return {
        type: RECEIVE_TODOS,
        todos: todos
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo
    };
};




export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";