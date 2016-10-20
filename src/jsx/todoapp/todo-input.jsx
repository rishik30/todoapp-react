import React from 'react'

export class TodoInput extends React.Component {

    constructor(props) {
        super(props);
            this.list = null
    }

    render() {
        return(
            <form className="input-container" onSubmit={this._handleCreate.bind(this)}>
                <input
                    type="text"
                    placeholder="What to do Next?"
                    ref={input=>this.list=input} />
            </form>
        )
    }

    _handleCreate(e) {
        e.preventDefault();
        this.props.createTask(this.list.value)
        console.log(this.list)
        this.list.value = ''
    }
}
