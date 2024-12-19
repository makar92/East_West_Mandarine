import React from 'react'
import styles from './Content.module.scss'
import Image from './Image/Image'
import AudioPlayer from './AudioPlayer/AudioPlayer'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import Text from './Text/Text'
import {
  AUDIO, EXERSIZE_PININ_1, EXERSIZE_PININ_2, HTML, IMAGE,
  NEXT_STEP_BUTTON, PREV_STEP_BUTTON, QUIZ_TEXT_INPUT,
  TEST_CHECKBOX, TEST_RADIO, TEXT, VIDEO,
  YOUTUBE
} from '../../../utils/contentTypes'
import Button from '../../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setStepNumber } from '../../../store/course/course'
import TestRadio from '../Puzzles/TestRadio/TestRadio'
import TestCheckbox from '../Puzzles/TestCheckbox/TestCheckbox'
import QuizTextInput from '../Puzzles/QuizTextInput/QuizTextInput'
import ExersizePinin2 from '../Puzzles/ExersizePinin2/ExersizePinin2'
import ExersizePinin from '../Puzzles/ExersizePinin/ExersizePinin'
import YouTubePlayer from './YouTubePlayer/YouTubePlayer'
import HtmlCode from './HtmlCode/HtmlCode'

const Content = (props) => {

  const dispatch = useDispatch()
  const stepNumber = useSelector(state => state.course.stepNumber)
  const steps = useSelector(state => state.course.steps)

  const openPrevStep = () => {
    if (stepNumber > 0) {
      dispatch(setStepNumber({ stepNumber: stepNumber - 1 }))
    }
  }

  const openNextStep = () => {
    if (stepNumber < steps.length - 1) {
      dispatch(setStepNumber({ stepNumber: stepNumber + 1 }))
    }
  }

  return (
    <div className={styles.content}>
      {/* ----- contents ----- */}
      {props.contentType === TEXT && <Text content={props.content} />}
      {props.contentType === IMAGE && <Image content={props.content} />}
      {props.contentType === AUDIO && <AudioPlayer content={props.content} />}
      {props.contentType === VIDEO && <VideoPlayer content={props.content} />}
      {props.contentType === YOUTUBE && <YouTubePlayer content={props.content} />}
      {props.contentType === HTML && <HtmlCode content={props.content} />}
      {/* ----- exersizes ----- */}
      {props.contentType === TEST_RADIO && <TestRadio content={props.content} />}
      {props.contentType === TEST_CHECKBOX && <TestCheckbox content={props.content} />}
      {props.contentType === QUIZ_TEXT_INPUT && <QuizTextInput content={props.content} />}
      {props.contentType === EXERSIZE_PININ_1 && <ExersizePinin content={props.content} />}
      {props.contentType === EXERSIZE_PININ_2 && <ExersizePinin2 content={props.content} />}
      {/* ----- others ----- */}
      {props.contentType === PREV_STEP_BUTTON &&
        <Button text="previous" onClick={openPrevStep} />
      }
      {props.contentType === NEXT_STEP_BUTTON &&
        <Button text="next" onClick={openNextStep} />
      }
    </div>
  )
}

export default Content