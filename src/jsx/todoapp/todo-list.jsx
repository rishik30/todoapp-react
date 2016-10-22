import React from 'react'
import {TodoTask} from './todo-task.jsx'
import {Svg} from '../svg.jsx'

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.delId = 0;
    }

    render() {
        let deleteFunction = this.props.handleDelete
        return(
            <ul className="todo-list">
                {this.props.data.map((listItem, i) => {
                    return <div key={i}>
                            <TodoTask task={listItem.task} id={listItem.id} />
                            <span onClick={this.props.handleDelete.bind(this,listItem)}>[x]</span>
                            </div>
                })}
            </ul>
        )
    }
}
