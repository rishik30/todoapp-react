import React from 'react'

export class TodoTask extends React.Component {

    render() {
        return(
            <li className="todo-task">
                {this.props.task}
            </li>
        )
    }
}
