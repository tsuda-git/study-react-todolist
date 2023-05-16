import React from 'react'
import './TodoList.css'
import Todo from './Todo/Todo';

function TodoList(props){
    return(
        <div className="comTodoList">
            <div className="list">
            <h2>未完了List</h2>
                <ul>
                    {props.todos.filter((todo) => todo.isCompleted === false).map((todo) => {
                        return <Todo key={todo.id} todo={todo} changeIsCompleted={props.changeIsCompleted}/>;
                    })}
                </ul>
            </div>
            <div className="list">
            <h2>完了済List</h2>
                <ul>
                    {props.todos.filter((todo) => todo.isCompleted === true).map((todo) => {
                        return <Todo key={todo.id} todo={todo} changeIsCompleted={props.changeIsCompleted}/>;
                    })}
                </ul>
            </div>
        </div>

    )
}

export default TodoList;