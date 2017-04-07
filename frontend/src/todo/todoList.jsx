import React from 'react'

import IconButton from '../template/iconButton'

const TodoList = (props) => {

    const renderRow = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'todo-done' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IconButton 
                        style='success' 
                        icon='check'
                        hide={todo.done}
                        onClick={() => props.handleTodoAsDone(todo)} />
                    <IconButton 
                        style='warning' 
                        icon='undo'
                        hide={!todo.done}
                        onClick={() => props.handleTodoAsPending(todo)} />
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table table-striped table-todo'>
            <thead> 
                <tr>
                    <th>
                        Descrição
                    </th>
                    <th>
                        Ação
                    </th>
                </tr>
            </thead>
            <tbody>
                {renderRow()}
            </tbody>
        </table>
    )
}

export default TodoList