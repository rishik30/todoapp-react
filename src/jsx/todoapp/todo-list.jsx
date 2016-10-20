import React from 'react'
import {TodoTask} from './todo-task.jsx'
import {Svg} from '../svg.jsx'

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.delId = 0;
    }

    render() {
        return(
            <ul className="todo-list">
                {this.props.data.map((listItem, i) => {
                    return <TodoTask
                                key={i}
                                task={listItem.task}
                                id={listItem.id}
                                onClick={this.props.handleDelete.bind(this, listItem.id)} />
                })}
            </ul>
        )
    }
}
