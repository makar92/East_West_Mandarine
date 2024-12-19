import { configureStore } from '@reduxjs/toolkit';
import isLoginReducer from './isLogin/isLoginSlice';
import courseReducer from './course/course';
import coursesReducer from './courses/courses';
import dataReduser from './data/dataSlise'

const SESSION_STORAGE_KEY = 'courseState';

// Middleware для сохранения состояния в sessionStorage
const sessionStorageMiddleware = store => next => action => {
  const result = next(action);
  const state = store.getState();
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state.course));
  return result;
};

// Функция для загрузки состояния из sessionStorage
const loadStateFromSessionStorage = () => {
  const state = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return state ? JSON.parse(state) : undefined;
};

const preloadedState = {
  course: loadStateFromSessionStorage() || {
    courseID: "",
    courseName: "",
    courseDescription: "",
    courseImage: "",
    stepNumber: 0,
    steps: [],
  }
};

export const store = configureStore({
  reducer: {
    isLogin: isLoginReducer,
    course: courseReducer,
    courses: coursesReducer,
    data: dataReduser
  },
  preloadedState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sessionStorageMiddleware),
  devTools: process.env.NODE_ENV !== 'production',  
});
