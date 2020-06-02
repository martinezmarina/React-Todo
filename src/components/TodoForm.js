import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }
    onChange = e => {
        this.setState({
            task: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ""
        });
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                type="text"
                name="task"
                placeholder="...todo"
                value={this.state.task}
                onChange={this.onChange}
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm;