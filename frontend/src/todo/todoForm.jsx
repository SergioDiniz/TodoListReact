import React from 'react'

import IconButton from '../template/iconButton'

const TodoForm = (props) => {
    return(
        <div className='todoForm'>
            <div className="col-xs-12 col-sm-8 col-md-10">
                <input className='form-control input-lg' id='description' type='text' placeholder='Adicione uma tarefa' ></input>
            </div>

            <div className='col-xs-12 col-sm-4 col-md-2'>
                <IconButton style='primary' icon='plus'></IconButton>
            </div>
        </div>
    )
}

export default TodoForm