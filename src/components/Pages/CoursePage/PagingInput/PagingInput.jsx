import React from 'react'
import styles from './PagingInput.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setStepNumber } from '../../../../store/course/course'

const PagingInput = () => {

  const dispatch = useDispatch()

  const stepNumber = useSelector(state => state.course.stepNumber)

  const changeValue = (e) => {

    let value = parseInt(e.target.value, 10)

    // Принудительное соблюдение границ min и max
    if (value < 1) value = 1
    if (value > 3) value = 3

    dispatch(setStepNumber({stepNumber: value - 1}))
  }

  return (
      <input
        className={styles.input}
        type='number'
        value={stepNumber + 1}
        onChange={changeValue}
      />
  )
}

export default PagingInput