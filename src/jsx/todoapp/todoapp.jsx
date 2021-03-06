import React from 'react'
import {TodoList} from './todo-list.jsx'
import {TodoInput} from './todo-input.jsx'
import {Svg} from '../svg.jsx'

export class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.id = 1;

        this.state = {
            todoList: []
        }
    }

    render() {
        return(
            <div className="todo-app">
                <h1>todo app</h1>
                <TodoInput createTask={this._createTask.bind(this)} />
                <TodoList data={this.state.todoList} handleDelete={this._handleDelete.bind(this)} />
            </div>
        )
    }

    _createTask(task) {
        this.state.todoList.push({
            task,
            id: this.id++
        })
        this.setState({todoList: this.state.todoList})
        console.log("list", this.state.todoList)
    }

    _handleDelete(itemToDelete) {
        // let newList = this.state.todoList.filter((item) => {
        //     return item=itemToDelete                             /* First method to delete an elemnt from the list */
        // })
        let position = this.state.todoList.indexOf(itemToDelete)    /* Second method to delete an elemnt from the list */
        this.state.todoList.splice(position, 1)                     /* Self created */
        this.setState({todoList: this.state.todoList})
    }

}
