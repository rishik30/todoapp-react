import React from 'react'

export class TodoTask extends React.Component {

    render() {
        return(
            <li className="todo-task" onClick={e=>this._delete.bind(this)}>
                {this.props.task}
                {/* <Svg src="/img/delete-cross.svg" /> */}
            </li>
        )
    }

    _delete() {
        this.props.onClick(this.props.id)
        console.log("delete", this.props.id)
    }
}
