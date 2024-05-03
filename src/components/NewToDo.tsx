import React from "react";
import { useRef, useContext } from "react";
import classes from './NewToDo.module.css'
import { TodosContext } from "../store/TodosContext";

const NewToDo : React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const toDoCtx = useContext(TodosContext)

    function handleAddToDo(e : React.FormEvent) {
        e.preventDefault()
        if (!inputRef.current) {
            throw new Error('Please enter a non-empty item.')
        }
        toDoCtx.addTodo(inputRef.current!.value)
    }

    return (
        <form onSubmit={handleAddToDo} className={classes.form}>
            <input ref={inputRef} type='text' name='todo' placeholder="add new toDo" required />
            <button type='submit'>Add</button>
        </form>
    )
}

export default NewToDo;