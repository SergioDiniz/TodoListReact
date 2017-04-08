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
        this.handleSearch = this.handleSearch.bind(this)

        this.initList()
    }

    initList(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios
            .get(`${URL}?sort=-createdAt` + search)
            .then(resp => {
                this.setState({
                    ...this.state,
                    description,
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
                this.initList(this.state.description)
            })
    }

    handleTodoAsDone(todo){
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => {
                this.initList(this.state.description)
            })
    }

    handleTodoAsPending(todo){
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => {
                this.initList(this.state.description)
            })
    }

    handleSearch(){
        this.initList(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>

                <TodoForm
                    value={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}/>

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