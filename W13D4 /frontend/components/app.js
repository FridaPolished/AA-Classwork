import React from 'react';
import TodoListContainer from "./todos/todo_list_container.jsx";


class App extends React.Component {

    render () {

        return (
            <div>  
                <h1>"Forget things?! Nevermore!" --Edgar Alan Poe</h1>
                <TodoListContainer />
            </div> 
        )
    }
}

export default App;