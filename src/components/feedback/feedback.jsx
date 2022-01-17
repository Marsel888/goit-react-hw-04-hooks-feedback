import React from 'react'
import { useState, useEffect } from 'react'
import Buttons from '../buttons/buttons'
import Statistick from './statistick/statistick'
import Title from '../title/title'

function Feedback(params) {
  const [good, setGood] = useState(0)
  const [neutral, setnNutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countTotalFeedback = () => {
    return good + neutral + bad
  }
  const countPositiveFeedbackPercentage = (total) =>
    total ? Math.round((good / total) * 100) : 0

  const counter = (key) => {
    if (key === 'good') {
      setGood((prev) => prev + 1)
    }
    if (key === 'neutral') {
      setnNutral((prev) => prev + 1)
    }
    if (key === 'bad') {
      setBad((prev) => prev + 1)
    }
  }

  const total = countTotalFeedback()
  const feedback = countPositiveFeedbackPercentage(total)

  return (
    <Title title={'Залиште відгук'}>
      <Buttons value={counter} options={['good', 'neutral', 'bad']} />
      {total ? (
        <Statistick
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          feedback={feedback}
        />
      ) : (
        <h2>Немає статистики</h2>
      )}
    </Title>
  )
}

export default Feedback
