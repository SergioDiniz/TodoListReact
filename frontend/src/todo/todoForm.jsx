import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import { changeDescription, search, add } from './todoActions'


class TodoForm extends Component {

    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(event){
        const { add, search, description } = this.props
        if(event.key === 'Enter'){
            event.shiftKey ? search() : add(description)
        } else if (event.key === 'Escape'){
            this.props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div className='todoForm'>
                <div className="col-xs-12 col-sm-8 col-md-10">
                    <input
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        className='form-control input-lg'
                        id='description'
                        type='text'
                        placeholder='Adicione uma tarefa'></input>
                </div>

                <div className='col-xs-12 col-sm-4 col-md-2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search' onClick={() => search()} ></IconButton>
                    <IconButton style='default' icon='eraser' onClick={this.props.handleClear} ></IconButton>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})
const mapDispatchToProps = dispatch => 
                    bindActionCreators({changeDescription, search, add}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)