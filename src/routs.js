import AboutUsPage from "./components/Pages/AboutPage/AboutPage"
import ContactUsPage from "./components/Pages/ContactPage/ContactPage"
import CoursePage from "./components/Pages/CoursePage/CoursePage"
import CoursesPage from "./components/Pages/CoursesPage/CoursesPage"
import MainPage from "./components/Pages/MainPage/MainPage"

export const MAIN_PAGE_ROUTE = '/main'
export const COURSES_PAGE_ROUTE = '/courses'
export const COURSE_PAGE_ROUTE = '/course'
export const ABOUT_PAGE_ROUTE = '/about'
export const CONTACT_PAGE_ROUTE = '/contact'

export const publicRoutes = [
  { path: MAIN_PAGE_ROUTE, Component: MainPage },
  { path: COURSES_PAGE_ROUTE, Component: CoursesPage },
  { path: COURSE_PAGE_ROUTE, Component: CoursePage },
  { path: ABOUT_PAGE_ROUTE, Component: AboutUsPage },
  { path: CONTACT_PAGE_ROUTE, Component: ContactUsPage },
]

export const privateRoutes= [
  { path: MAIN_PAGE_ROUTE, Component: MainPage },
  { path: COURSES_PAGE_ROUTE, Component: CoursesPage },
  { path: COURSE_PAGE_ROUTE, Component: CoursePage },
  { path: ABOUT_PAGE_ROUTE, Component: AboutUsPage },
  { path: CONTACT_PAGE_ROUTE, Component: ContactUsPage },
]