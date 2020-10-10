import React from 'react'
import { ITodo } from '../../interfaces'


type propsAlistTodo = {
    todos: ITodo[]
    toggleHandler(id: number) :void
    removeTodoHandler(id: number) :void
}


const AlistTodo: React.FC<propsAlistTodo> = ({ todos, toggleHandler, removeTodoHandler }) => {


    if (todos.length === 0) {
        return <p className="center"><b>У Вас пока нет задач</b></p>
    }

    const onClickRemoveHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        if (window.confirm('Вы действительно хотите удалить задачи ?')) {
            removeTodoHandler(id)
        }
    }

    return(
        <ul>
            {todos.map((todo, index) => {
                const cls = ['todo']
                if (todo.completed) {
                    cls.push('active')
                }

                return <li className={cls.join(' ')} key={index}>
                    <label>
                        <input  type="checkbox"
                                checked={todo.completed}
                                onChange={toggleHandler.bind(null, todo.id)}/>
                        <span>{todo.title}</span>
                        <i 
                            onClick={event => onClickRemoveHandler(event, todo.id)}
                            className="material-icons red-text">delete</i>
                    </label>
                </li>
            })}
        </ul>
    )
}

export default AlistTodo