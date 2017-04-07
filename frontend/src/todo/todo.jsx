import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props){
        super(props)
        this.state = {description: '', list: []}

        //binds
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.initList = this.initList.bind(this)
    }

    initList(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => {
                this.setState({...this.state, description: '', list: resp.data})
                console.log(resp.data)
            })
    }

    handleChange(event){
        this.setState({...this.state, description: event.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => {
                this.initList()
            })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    value={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        );
    }
}

export default Todo;