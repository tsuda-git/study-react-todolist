import React from 'react'
import './Todo.css'

function Todo(props){
    const getTextIsCompleted = (isCompleted) =>{
        return isCompleted? '未完了へ' : '完了済へ';
    }

    const handleChangeIsCompleted = () => {
        props.changeIsCompleted(props.todo.id);
    }

    return(
        <div className="comTodo">
            <li>
                <div>
                    <p>{props.todo.taskName}</p>
                    <p className="compleated" onClick={handleChangeIsCompleted}>{getTextIsCompleted(props.todo.isCompleted)}</p>
                </div>
            </li>
        </div>
    )
}

export default Todo;