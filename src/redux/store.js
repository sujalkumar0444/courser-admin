import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import CurrentCourseReducer from './CurrentCourse'


export const store = configureStore({
    reducer: {
      counter: counterReducer,
      CurrentCourse: CurrentCourseReducer,
    },
  })