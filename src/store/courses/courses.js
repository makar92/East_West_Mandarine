import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingCourses: true,
  isWaitingSaveCourse: false,
  courses: [],
};

const coursesSlice = createSlice({
  name: 'coursesState',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload.courses
    },
    setIsLoadingCourses: (state, action) => {
      state.isLoadingCourses = action.payload.value
    },
    setIsWaitingSaveCourse(state, action) {
      state.isWaitingSaveCourse = action.payload.value;
    },
  },
});

export const { 
  setCourses, 
  setIsLoadingCourses,
  setIsWaitingSaveCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;