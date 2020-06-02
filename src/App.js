import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const taskList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      taskList: taskList,
    };
  }
  addTask = taskName => {
    const newTask = {
      name : taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  };
  toggleTask = taskId => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }
  clearCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed
      )
    })
  }
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList 
        toggleTask={this.toggleTask}
        taskList={this.state.taskList}
        />
        <TodoForm addTask={this.addTask} clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
