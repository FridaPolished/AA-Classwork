import React from "react";
import { receiveTodo } from '../../actions/todo_actions';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        

        this.state = {body: "", title: "", key: this.uniqueId()};

        this.handleSubmit = this.handleSubmit.bind(this);
    };
    uniqueId() {
        return new Date().getTime();
    };
    
 

    update(field) { 
        // this;
        // debugger;
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.receiveTodo(this.state);
    }

    render () {
        return(
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label>Title

                        <input onChange={this.update("title")} value= {this.state.title}/>
                    </label>
                    <label>Body
                        <input onChange={this.update("body")} value={this.state.body} />

                    </label>
                    <button>
                        Submit
                    </button>
                </form>


            </div>   

        )
    }

}

export default TodoForm;