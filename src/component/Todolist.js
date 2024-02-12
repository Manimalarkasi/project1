import React ,{useState} from 'react'
import './Todocss.css';
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addtodo =(todo) =>{
         setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}]);
         console.log(todos);
  }
  const toggleCompleted = (id)=>{
       setTodos(todos.map((todo)=>todo.id === id ? {...todo,completed: !todo.completed} : todo ))
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo=> todo.id !== id ))
  }
  const editTodo = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo))
  }
  const edittask = (task,id) =>{
    setTodos(todos.map(todo =>todo.id === id ? {...todo,task,isEditing: !todo.isEditing} : todo))
  }
  return (
    <div className='todowarapper'>
      <h1>Get Things Done!</h1>
      <Todoform addtodo={addtodo} />
      {todos.map((todo,index) =>(
        todo.isEditing ? (
          <EditTodoform edittodo={edittask} task={todo} />
        ): (
        <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
      ))}
     
    </div>
  )
}



export function Todoform({addtodo}) {
  const [value, setValue] = useState('');
  const handlesubmit =(e) => {
    e.preventDefault();
    // console.log(value);
    addtodo(value);
    setValue("");
  }
  return (
    <form className='todofrom' onSubmit={handlesubmit}>
    
          <input type='text' value={value} className='todoinput' placeholder="what is task today?" onChange={(e)=>setValue(e.target.value)} />
          <button type='submit' className='todobut'>add task</button>
    </form>
  )
}


 export function Todo({task,toggleCompleted,deleteTodo,editTodo}) {
  return (
    <div className='todo'>
      {/* <p>sleep</p> */}
      {/* <div style={{gap:'10px', padding:'10px',margin:'10px'}}>
          <FontAwesomeIcon icon={faPenToSquare} style={{padding:'10px',gap:'10px'}} />
          <FontAwesomeIcon icon={faTrash} style={{padding:'10px',gap:'10px'}} />
      </div>  */}
      <p onClick={()=>toggleCompleted(task.id)} className={`${task.completed ? 'completed' :""}`}>{task.task}</p>
      <div style={{gap:'10px', padding:'10px',margin:'10px'}}>
          <FontAwesomeIcon icon={faPenToSquare} style={{padding:'10px',gap:'10px'}} onClick={()=>editTodo(task.id)} />
          <FontAwesomeIcon icon={faTrash} style={{padding:'10px',gap:'10px'}} onClick={() =>deleteTodo(task.id)} />
      </div>
      {/* <p>bouth</p>
      <p>eat</p> */}
    </div>
  )
}


export function EditTodoform({edittodo,task}) {
  const [value, setValue] = useState(task.task);
  const handlesubmit =(e) => {
    e.preventDefault();
    // console.log(value);
    edittodo(value,task.id);
    setValue("");
  }
  return (
    <form className='todofrom' onSubmit={handlesubmit}>
    
          <input type='text' value={value} className='todoinput' placeholder="Update task" onChange={(e)=>setValue(e.target.value)} />
          <button type='submit' className='todobut'>Update task</button>
    </form>
  )
}




export default TodoWrapper
