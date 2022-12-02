import React, { useState } from 'react'
import './Quiz.css'
import QuizQuestion from './QuizQuestion/QuizQuestion'
import QuizResult from './QuizResult/QuizResult'
import dataQuestions from '../dataQuestions/dataQuestions'

function Quiz() {
  const [counter, setCounter] = useState(0)
  const [result, setResult] = useState(0)
  const [questions] = useState(dataQuestions)

  function getAnswer(answer){
    let {trueAnswers} = questions[counter]
    trueAnswers.includes(answer)
    if(trueAnswers.includes(answer)){
      setResult(result + 1)
    }
  }
  function tryAgain(){
    setCounter(0)
    setResult(0)
  }
  return (
    <>
    <div className="container">
       {counter < questions.length? <QuizQuestion questions={questions} counter={counter} setCounter={setCounter} getAnswer={getAnswer}/> : 
       <QuizResult result={result} tryAgain={tryAgain}/>}
    </div>
    </>
  )
}

export default Quiz