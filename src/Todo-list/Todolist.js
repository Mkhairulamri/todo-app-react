import todo from '../Todo/todo';
import './Todolist.css'

const Todolist = (props)=>{
    return (
        <ul>
            {
                props.list.map((todo)=>{
                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    )
}
export default Todolist;