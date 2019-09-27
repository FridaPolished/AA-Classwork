import React from "react";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
    };
   

    render () {
        // debugger;
        return (<li key={this.props.id}>{this.props.todo.title}</li>);

    }




}

export default TodoListItem;