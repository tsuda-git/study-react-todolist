import React, { useRef } from 'react'
import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import Form from './Form/Form'
import TodoList from './TodoList/TodoList';

function Main(){
    const initialState = [
        {
            id: uuid(),
            taskName: 'template',
            isCompleted: false
        }    
    ]

    const [todos, setTodos] = useState(initialState);
    const newTaskRef = useRef(null);

    // タスク追加処理
    const handleSubmit = (eve) =>{
        eve.preventDefault();       // 再読み込みをしないようにする処理
        if(!newTaskRef.current.value) return;
        setTodos([...todos, {id: uuid(), taskName: newTaskRef.current.value, isCompleted: false}]);
        newTaskRef.current.value = null;
    }

    // タスク達成処理
    const changeIsCompleted = (id) =>{
        const newTodos = todos.map(todo => {
            if(todo.id === id) todo.isCompleted = !todo.isCompleted;   
            return todo;
        })

        setTodos(newTodos);
    }

    return(
        <div>
            <Form newTaskRef={newTaskRef} handleSubmit={handleSubmit}/>
            <TodoList todos={todos} changeIsCompleted={changeIsCompleted}/>
        </div>
    )
}

export default Main;