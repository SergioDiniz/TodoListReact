import React from 'react'

import IconButton from '../template/iconButton'

const TodoList = (props) => {

    const renderRow = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    {todo.description}
                </td>
                <td>
                    <IconButton 
                        style='danger' 
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table table-striped'>
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