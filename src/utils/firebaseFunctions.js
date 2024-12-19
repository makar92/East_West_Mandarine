import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { setCourses, setIsLoadingCourses } from "../store/courses/courses";
import { db } from "../firebase";
// import { setIsLoadingPages, setPages } from "../store/pages/pages";
import { setData, setIsLoadingData } from "../store/data/dataSlise";

//////////////////////////////////
//----- DATA ---------------------

//Получение общих данных
export const useData = () => {

  const dispatch = useDispatch();
  const isLoadingData = useSelector(state => state.data.isLoadingCourses);

  const getData = async () => {

    try {

      dispatch(setIsLoadingData({ value: true }));

      const querySnapshot = await getDocs(collection(db, 'data'))
      const allData = {};
      querySnapshot.forEach((doc) => {
        allData[doc.id] = doc.data() 
      });

      dispatch(setData({ data: allData }));
      
    } catch (e) {
      console.error('Ошибка при получении данных: ', e)
    } finally {
      dispatch(setIsLoadingData({ value: false }));
    }
  }

  return { getData, isLoadingData }
};

/////////////////////////////////
//---- COURSES ------------------

//Получение списка курсов
export const useCourseList = () => {
  const dispatch = useDispatch();
  const isLoadingCourses = useSelector(state => state.courses.isLoadingCourses);

  const getCourseList = async () => {
    try {
      dispatch(setIsLoadingCourses({ value: true })); // Установите isLoading в true перед началом загрузки
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const items = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        courseID: doc.id
      }));
      dispatch(setCourses({ courses: items }));
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      dispatch(setIsLoadingCourses({ value: false })); // Установите isLoading в false после завершения загрузки
    }
  };

  return { getCourseList, isLoadingCourses };
};


