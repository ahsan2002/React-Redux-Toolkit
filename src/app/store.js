import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/todoSlice'

//configure store obj leta hai!!

export const store = configureStore({
    reducer: todoReducer
})