// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   isLoadingData: true,
//   data: {
//     main: {
//       mainLogo: "",
//       footerText: "",
//     },
//     mainBlock: {
//       image: "",
//       text: "",
//       BG: ""
//     },
//     socials: {
//       socialList: []
//     },
//     aboutMeBlock: {
//       text: "",
//       image: "",
//       link: ""
//     }    
//   },
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     setData: (state, action) => {
//       state.data = action.payload.data;
//     },
//     setIsLoadingData: (state, action) => {
//       state.isLoadingData = action.payload.value
//     }
//   },
// });

// export const { 
//   setData, 
//   setIsLoadingData 
// } = dataSlice.actions;

// export default dataSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

// Изначальный state
const initialState = {
  isLoadingData: true,
  data: {
    main: {
      mainLogo: "",
      footerText: "",
    },
    mainBlock: {
      image: "",
      text: "",
      BG: ""
    },
    socials: {
      socialList: [],
    },
    aboutMeBlock: {
      text: "",
      image: "",
      link: ""
    },
    aboutPage: {
      blocks: [],
      youTubeVideo: "https://www.youtube.com/watch?v=HuZ24mLdeII",
      text: ""
    },
    contactPage: {
      text: ""
    }  
  },
};

// Рекурсивное обновление объектов
const mergeDeep = (target, source) => {
  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {}; // Инициализация если поле отсутствует
      mergeDeep(target[key], source[key]); // Рекурсивно обновляем
    } else {
      target[key] = source[key]; // Обновляем поле
    }
  });
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      const incomingData = action.payload.data;

      if (incomingData && typeof incomingData === "object") {
        mergeDeep(state.data, incomingData); // Глубокое обновление
      }
    },
    setIsLoadingData: (state, action) => {
      state.isLoadingData = action.payload.value;
    }
  },
});

export const { 
  setData, 
  setIsLoadingData 
} = dataSlice.actions;

export default dataSlice.reducer;
