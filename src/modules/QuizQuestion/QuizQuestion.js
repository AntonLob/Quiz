import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './QuizQuestion.css'


function QuizQuestion({counter , setCounter, questions , getAnswer}) {
  let {answers , question} = questions[counter]
  function getNextQuestion(value){
    setCounter(counter + 1);
    getAnswer(value)
  }
  return (
    <div className='quizQuestion'>
  <ProgressBar counter={counter} length = {questions.length}/>
<div className="question">
    {question}
</div>
<div className="answersOptionsBlock" onClick={(e)=>getNextQuestion(e.target.dataset.value)}>
  {answers.map((answer)=>{
    return    <div key={answer} className="answer" data-value={answer}>{answer}</div>
  })}

</div>
    </div>
  )
}

export default QuizQuestion