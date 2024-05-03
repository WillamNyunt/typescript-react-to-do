import React, {useContext} from 'react'
import ToDoItem from './ToDoItem'
import classes from './ToDos.module.css'
import { TodosContext } from '../store/TodosContext'

const Todos : React.FC = () => {
    const ToDosCtx = useContext(TodosContext) 

    return (
        <ul className={classes.todos}>
            {ToDosCtx.items.map( item => <ToDoItem onClick={() => ToDosCtx.removeTodo(item.id)} key={item.id} text={item.text} />)}
        </ul>
    )
}

export default Todos;
