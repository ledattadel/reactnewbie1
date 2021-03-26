import React from 'react';
import Todo from './Todo';

const Todolist = ({todos,setTodos}) => {
    // const [todos,setTodos] = useState([]);
    return(
        <div class="todo-container">
        <ul class="todo-list">
            {todos.map((todo)=>(
                <Todo 
                        
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        text={todo.text}
                        key={todo.id}
                        // access the each one
                        ></Todo>
            ))}
        </ul>
        </div>
    );
}
export default Todolist;