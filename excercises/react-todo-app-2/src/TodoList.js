import React, {Component} from 'react';
import Todo from './Todo';

function TodoList(props) {
    const allTodos = props.todos.map((todo, i) => {
        return <Todo
        handleDelete={props.deleteTodo}
        info={todo}
        key={todo._id}
        handleComplete={props.handleComplete}
        />
    });

    return allTodos;
}

export default TodoList;
