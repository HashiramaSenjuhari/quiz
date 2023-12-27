import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the capital of India?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  // Add more questions here...
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const totalQuestions = questions.length;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    setSelectedOption('');
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleQuit = () => {
    alert(`Quiz ended. Your score is ${score}/${totalQuestions}`);
    alert(`You answered ${correctAnswers} questions correctly and ${incorrectAnswers} questions incorrectly.`);
    alert(`You attended ${currentQuestion} out of ${totalQuestions} questions.`);
    alert(`Your percentage score is ${(score / totalQuestions) * 100}%.`);
  };

  return (
    <div className="Quiz">
      {/* <h1>Quiz Quiz</h1> */}
      {currentQuestion < totalQuestions ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={!selectedOption}>
            Next
          </button>
          <button onClick={handleQuit}>Quit</button>
        </div>
      ) : (
        <div className='completed'>
          <h2>Quiz Completed!</h2>
          <p>Your score is {score}/{totalQuestions}</p>
          <p>You answered {correctAnswers} questions correctly and {incorrectAnswers} questions incorrectly.</p>
          <p>You attended {currentQuestion} out of {totalQuestions} questions.</p>
          <p>Your percentage score is {(score / totalQuestions) * 100}%.</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
