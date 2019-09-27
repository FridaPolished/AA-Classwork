import React from 'react';
import TodoListItem from "./todo_list_item.jsx";
import TodoForm from "./todo_form.jsx";

class TodoList extends React.Component {
    constructor(props){
        super(props);
    };
  
    render (){
        let liElements = this.props.todos.map((todo, index) => {
           
           return(<TodoListItem todo={todo} key={index} />);
        });
        debugger;
        return(
            <ul>
                <p>this is a test</p>
                {liElements}
                <TodoForm />
            </ul>
        );
    }
}

export default TodoList;