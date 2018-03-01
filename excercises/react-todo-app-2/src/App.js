import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import FormContainer from './Form';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    
    handleComplete(id){
        const indexOfItemToEdit = this.state.todos.findIndex(todo => {
            return todo._id === id;
        })
        const isComplete = this.state.todos[indexOfItemToEdit].completed;
        const newBool =  !isComplete
        axios.put('https://api.vschool.io/jordan/todo/' + id, {completed: newBool}).then(response=>{
            this.setState(prevState=>{
                const copy = [...prevState.todos];
                copy.splice(indexOfItemToEdit, 1, response.data);
                return {todos: copy};
            })
        }) 
    }
    
    deleteTodo(id){
        axios.delete('https://api.vschool.io/jordan/todo/' + id).then(response=>{
            this.setState(prevState=>{
                const filteredTodos = prevState.todos.filter(todo=>{
                    return todo._id !== id; 
                })
                return {todos: filteredTodos}
            })
        })
    }
    
    addTodo(todo){
        axios.post('https://api.vschool.io/jordan/todo/', todo).then(response=>{
            this.setState((prevState)=>{
                return {todos: [response.data, ...prevState.todos]}
            })
        })
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/jordan/todo/').then(response=>{
            this.setState({todos: response.data})
        })
    }    
            
    render() {
        return (
            <div>
                <FormContainer addTodo={this.addTodo}/>
                <TodoList 
                deleteTodo={this.deleteTodo} 
                todos={this.state.todos}
                handleComplete={this.handleComplete}
                />
            </div>
        );
    }
}

export default App;
