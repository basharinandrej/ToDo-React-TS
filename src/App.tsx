import React from 'react';
import Header from './components/Header/Header'
import FormToDo from './components/FormToD0/Form-ToDo'
import AlistTodo from './components/AlistTo-Do/alistTodo'
import { ITodo } from './interfaces'
import './index.css'


const App: React.FC = () => {
    const [todos, setTodo] = React.useState<ITodo[]>([])

    React.useEffect(() => {
        const saved = JSON.parse( localStorage.getItem('todos') || '[]' ) as ITodo[]

        setTodo(saved)
    }, [])
    

    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const addTodoHandler = (titleTodo: string) => {
        const nweTodo: ITodo = {
            title: titleTodo,
            id: Date.now(),
            completed: false 
        }
        setTodo(prev => [nweTodo, ...prev])
    }

    const toggleHandler = (id:number) => {
        setTodo( prev => 
            prev.map(todo => {
            if (todo.id === id ) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const removeTodoHandler = (id:number) => {
        setTodo(prev => prev.filter(el => el.id != id))
    }

    return (
    <>
		<Header/>
		<div className="container">
			<h1>To-Do TypeScript</h1>

            <FormToDo
                addTodos={addTodoHandler}
            />

            <AlistTodo
                todos={todos}
                toggleHandler={toggleHandler}
                removeTodoHandler={removeTodoHandler}
            />
		</div>
    </>
  );
}

export default App;
