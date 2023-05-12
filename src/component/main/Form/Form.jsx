import React from 'react'
import './Form.css'

function Form(props){
    return(
        <div className="comForm">
            <form onSubmit={props.handleSubmit}>
                <input type="text" ref={props.newTaskRef} placeholder="todo"></input>
                <button type="submit">追加</button>
            </form>
        </div>
    )
}

export default Form;