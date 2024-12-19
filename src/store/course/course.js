import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courseID: "",
  courseName: "",
  courseDescription: "",
  courseImage: "",
  stepNumber: 0,
  steps: [],
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    
    setCourse: (state, action) => {
      state.courseID = action.payload.courseID
      state.courseName = action.payload.courseName
      state.courseDescription = action.payload.courseDescription
      state.courseImage = action.payload.courseImage
      state.stepNumber = 0
      state.steps = action.payload.steps
    },

    saveModule: (state, action) => {
      state.steps[action.payload.stepNumber].modules[action.payload.moduleNumber] = action.payload.module
    },

    setStepNumber: (state, action) => {
      state.stepNumber = action.payload.stepNumber
    },

  },
});

export const {
  setCourse,
  setStepNumber,
  setCourseName,
  setCourseDescription,
  setCourseImage,
} = courseSlice.actions;

export default courseSlice.reducer;