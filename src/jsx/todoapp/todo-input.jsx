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
        if(this.list.value == "") return null
        this.props.createTask(this.list.value)
        this.list.value = ''
    }
}
