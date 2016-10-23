import React from 'react'
import {render}	from 'react-dom'
import {ToDoApp} from './todoapp/todoapp.jsx'
import "../scss/todoapp.scss";

export class FirstApp extends React.Component {

    render() {
        return(
            <main>
                <ToDoApp />
            </main>
        )
    }
}

render(<FirstApp/>, document.getElementById('react-app'))
