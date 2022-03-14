import './todo.css'
import TodoList  from "../Todo-list/Todolist.js"
import {useState} from "react"
import TodoCreate from "../todo-create/todo-create.js"

const Todo = () =>{
    const [getTodos,setTodos] = useState ([
        {id:1,title:'makan'},
        {id:2,title:'tidur'},
        {id:3,title:'mandi'} 
    ])

    const eventCreateTodo=(todo) =>{
        setTodos(getTodos.concat(todo))
    }

    return(
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList list={getTodos}/>
        </div>
    )
}

export default Todo;

