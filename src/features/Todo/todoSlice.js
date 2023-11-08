import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid :generates unique ids only!!

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world",
        },
    ]
};

//reducer mae properties aur func ate hai!!

//state aur action ka access hoga!
//state:current state
//action:jo data pass ho raha hai

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

//individual bhi krna hoga aur pora aik sath bhi!