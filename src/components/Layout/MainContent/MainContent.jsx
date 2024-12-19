import React from 'react'
import styles from './MainContent.module.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MAIN_PAGE_ROUTE, privateRoutes, publicRoutes } from '../../../routs'

const MainContent = (props) => {

  const isLogin = true

  return (
    <div className={styles.mainContent}>
      {isLogin
        ? (
          <Routes>
            {privateRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={'*'} element={<Navigate to={MAIN_PAGE_ROUTE} replace />} />
          </Routes>
        )
        : (
          <Routes>
            {publicRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={'*'} element={<Navigate to={MAIN_PAGE_ROUTE} replace />} />
          </Routes>
        )
      }
    </div>
  )
}

export default MainContent