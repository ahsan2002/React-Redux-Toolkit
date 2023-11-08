import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/todoSlice';

const AddTodo = () => {
    const[input,setInput]=useState('');
    const dispatch=useDispatch()


    //dispatch aik reducer ko use krty hoye store mae value add krta hai

    const addTodoHandler=(e)=>{
            e.preventDefault();
            dispatch(
                addTodo(input)
            )
            setInput('')

    }
  return (
    <form onSubmit={addTodoHandler}>
        <input placeholder='enter todo....' value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}/>

        <button>Submit</button>
    </form>
  )
}

export default AddTodo