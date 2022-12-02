import React from 'react'
import './QuizResult.css'

const VERY_BAD_RESULT = 'Very bad result';
const BAD_RESULT = 'Bad result';
const GOOD_RESULT = 'Good result';
const PERFECT_RESULT = 'Perfect result';

function QuizResult({result , tryAgain}) {
  function getResult(){

    switch(result){
      case(0):
        return VERY_BAD_RESULT
      case(1):
        return BAD_RESULT
      case(2):
        return BAD_RESULT
      case(3):
        return GOOD_RESULT
      case(4):
        return GOOD_RESULT
      case(5):
        return  PERFECT_RESULT
      default: return BAD_RESULT;
    }
  }
  return (
<div className="container result">
    <div className="res">
    {getResult()}
    </div>
    <div className="answerResult">
    You have typed {result} out of 5 correct answers
    </div>
    <button onClick={tryAgain}>try again</button>
</div>
  )
}

export default QuizResult