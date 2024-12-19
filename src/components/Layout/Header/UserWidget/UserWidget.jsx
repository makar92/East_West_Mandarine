import React from 'react'
import styles from './UserWidget.module.scss'
import { TbLogin2, TbLogout2 } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { inLogin, outLogin } from '../../../../store/isLogin/isLoginSlice';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../../firebase';

const UserWidget = () => {

  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isLogin.isLogin)

  const loginAdmin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Выполняем вход через Google
      const user = await signInWithPopup(auth, provider)
      dispatch(inLogin())
    } catch (error) {
      console.error("Ошибка при входе:", error)
      alert("Произошла ошибка при входе. Попробуйте снова.")
    }
  };

  const outAdmin = () => {
    auth.signOut()
    dispatch(outLogin())
  }

  return (

    <div className={styles.userWidget}>
      {!isLogin
        ? <TbLogin2
          className={styles.icon}
          onClick={() => loginAdmin()}
        />
        : <TbLogout2
          className={styles.icon}
          onClick={() => outAdmin()}
        />
      }
    </div>

  )
}

export default UserWidget