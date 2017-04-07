import React from 'react'

const Menu = (props) => {
    return(
        <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='#'>
                        <i className='fa fa-check-square'></i> TodoApp
                    </a>
                </div>

                <div id='navbar' className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li><a href='#/todos'>Tarefas</a></li>
                        <li><a href='#/about'>Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu