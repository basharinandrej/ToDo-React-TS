import React from 'react'

interface ToDoFormProps {
    addTodos(todo: string): void
}



const FormToDo: React.FC<ToDoFormProps> = props => {
    // const [title, setTitle] = React.useState<string>('')
    // const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.currentTarget.value)
    // }

    const ref = React.useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if ( event.key === 'Enter' ) {
            props.addTodos(ref.current!.value)
            ref.current!.value = ''
        }
    } 


    return (
        <div className="input-field">
            <input 
                type="text" 
                id="title"
                ref={ref}
                // value={title}    
                // onChange={titleHandler}
                onKeyPress={keyPressHandler}
            />
            <label  htmlFor="title" className="active">
                Введите название задачи
            </label>
        </div>
    )
}

export default FormToDo