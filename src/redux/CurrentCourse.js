import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  currentCoursedata: {},
}

export const CurrentCourseSlice = createSlice({
  name: 'CurrentCourse',
  initialState,
  reducers: {
    
    loadCurrentCourseData: (state, action) => {
      state.currentCoursedata = action.payload;
      // console.log("Current course is updated in redux store")
      // console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const {  loadCurrentCourseData } = CurrentCourseSlice.actions

export default CurrentCourseSlice.reducer