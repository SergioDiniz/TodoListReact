import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            description: '',
            list: []
        }

        //binds
        this.initList = this.initList.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleTodoAsDone = this.handleTodoAsDone.bind(this)
        this.handleTodoAsPending = this.handleTodoAsPending.bind(this)

        this.initList()
    }

    initList() {
        axios
            .get(`${URL}?sort=-createdAt`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    description: '',
                    list: resp.data
                })
            })
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            description: event.target.value
        })
    }

    handleAdd() {
        const description = this.state.description
        axios
            .post(URL, {description})
            .then(resp => {
                this.initList()
            })
    }

    handleRemove(todo){
        axios
            .delete(`${URL}/${todo._id}`)
            .then(resp => {
                this.initList()
            })
    }

    handleTodoAsDone(todo){
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => {
                this.initList()
            })
    }

    handleTodoAsPending(todo){
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => {
                this.initList()
            })
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>

                <TodoForm
                    value={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>

                <TodoList 
                    list={this.state.list}
                    handleTodoAsPending={this.handleTodoAsPending}
                    handleTodoAsDone={this.handleTodoAsDone}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default Todo;