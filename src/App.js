import './App.css';
import React from 'react';
import {useState} from 'react';


function App() {
  const questions = [
		{
			questionDisplay: 'Who is the CEO of Google?',
			answerOptions: [
				{ answerDisplay: 'Bobby Fischer', isCorrect: false },
				{ answerDisplay: 'Mikhail Tal', isCorrect: false },
				{ answerDisplay: 'Sundar Picchai', isCorrect: true },
				{ answerDisplay: 'Cenzig Under', isCorrect: false },
			],
		},
		{
			questionDisplay: 'When did Pakistan seperated from India?',
			answerOptions: [
				{ answerDisplay: '1940', isCorrect: false },
				{ answerDisplay: '1947', isCorrect: true },
				{ answerDisplay: '1980', isCorrect: false },
				{ answerDisplay: '2021', isCorrect: false },
			],
		},
		{
			questionDisplay: 'What is the name of the corridor that connects Indian mainland with The seven sisters?',
			answerOptions: [
				{ answerDisplay: 'Siliguri corridor', isCorrect: true },
				{ answerDisplay: 'Sunderban Corridor', isCorrect: false },
				{ answerDisplay: 'Majuli Corridor', isCorrect: false },
				{ answerDisplay: 'Delta Corridor', isCorrect: false },
			],
		},
		{
			questionDisplay: 'What is the full form of BITS Pilani?',
			answerOptions: [
				{ answerDisplay: 'Birla Institute of Teaching and Studying', isCorrect: false },
				{ answerDisplay: 'Birla Institute of Time and Studies', isCorrect: false },
				{ answerDisplay: 'None of these', isCorrect: false },
				{ answerDisplay: 'Birla Institute of Technology and Science', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, scoreCounter] = useState(0);

	const optionClick = (isCorrect) => {
		if (isCorrect) {
			scoreCounter(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>     
					You scored {score} out of {questions.length}
          
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionDisplay}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => optionClick(answerOption.isCorrect)}>{answerOption.answerDisplay}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}


export default App;
