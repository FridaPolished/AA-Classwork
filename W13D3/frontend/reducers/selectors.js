

const allTodos = (state) => {
    debugger
    let keys = Object.keys(state.todos);
        keys.map((id) => {
            return {id: state.todos[id]};
            }
        );
    return keys;
}

export default allTodos;