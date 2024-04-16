import React, { useState, useEffect, useRef } from 'react';
import Second from './Second';
function Body(){   
  const [myChoice, setMyChoice] = useState("");
  const [scoreMe, setScoreMe] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [ties, setTies] = useState(0);
  const [gameEnded, setGameEnded] = useState(false); 
 
  const resultDiv = useRef(null);
  const winSound = new Audio('win.mp3');
  const loseSound = new Audio('lose.mp3');
  const playWinSound = () => {
    winSound.play();
  };
 
  const playLoseSound = () => {
    
    loseSound.play();
  };
 
  const restartGame = () => {
    setScoreMe(0);
    setScoreComputer(0);
    setTies(0);
    setMyChoice("");
    setGameEnded(false); 
  };
 
  
  const handleChoiceClick = (playerChoice) => {
    if (gameEnded) {
      restartGame();
    }
    setMyChoice("You Choose: " + playerChoice);
    verifWin(playerChoice);
  };
 
 
  const verifWin = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const result = calculateWinner(playerChoice, computerChoice);
    if (result == 'tie') {
      setTies(ties + 1);
      setMyChoice("It's a tie!"); 
    } else {
      updateScores(result);
      displayResult(result, computerChoice);
    }
  };
 
 
  const getComputerChoice = () => {
    return Math.floor(Math.random() * 3) + 1;
  };
 
 
  const calculateWinner = (playerChoice, computerChoice) => {
    if (playerChoice == getChoiceText(computerChoice)) {
      return 'tie';
    }
    else if (
      (playerChoice === 'rock' && computerChoice === 3) ||
      (playerChoice === 'paper' && computerChoice === 1) ||
      (playerChoice === 'scissors' && computerChoice === 2)
    )
    {
      return 'win';
    }
    else {
      return 'lose';
    }
  };
 
 
  const updateScores = (calculateWinner) => {
    console.log(scoreComputer,scoreMe);
    if (calculateWinner === 'win') {
      setScoreMe(scoreMe + 1);
      if (scoreMe + 1 >= 5) {
        playWinSound();
        setGameEnded(true);
      }
    } else if (calculateWinner === 'lose') {
      setScoreComputer(scoreComputer + 1);
      if (scoreComputer + 1 >= 5) {
        playLoseSound();
        setGameEnded(true); 
      }
    }
  };
 
 
  const displayResult = (winner, computerChoice) => {
    let resultText = '';
    const resultClasses = resultDiv.current.classList; 
    const handleAnimationEnd = () => {
      resultClasses.remove('animate__animated', 'animate__bounce', 'animate__shakeX');
    };
    switch (winner) {
      case 'win':
        resultText = 'You win!';
        resultClasses.add("animate__animated", "animate__bounce");
        break;
      case 'lose':
        resultText = 'You lose!';
        resultClasses.add('animate__animated', 'animate__shakeX');
        break;
      default:
        resultText = 'It\'s a tie!';
    }
    resultDiv.current.removeEventListener('animationend', handleAnimationEnd);
    resultDiv.current.addEventListener('animationend', handleAnimationEnd);
    resultDiv.current.textContent = `Computer chose: ${getChoiceText(computerChoice)} so you ${winner}`;
  };
 
  const getChoiceText = (choice) => {
    switch (choice) {
      case 1:
        return 'rock';
      case 2:
        return 'paper';
      case 3:
        return 'scissors';
      default:
        return 'Unknown';
    }
  };
 
 
 
  return (
    <div className="container-fluid vh-200 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', minHeight: '5vh' }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div className="scoreboard mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className='container'>
              
              <span className=" text-left">You: {scoreMe}</span>

                <br />
                <span className="me-2">Computer: {scoreComputer}</span>
                <br />
                <span>Ties: {ties}</span>
              </div>
            </div>
          </div>
          <div className="choices d-flex justify-content-around">
            <img
              src="./public/rock_1faa8.png"
              alt="Rock"
              className="choice-img"
              id="rock"
              onClick={() => handleChoiceClick('rock')}
            />
            <img
              src="./public/scroll_1f4dc.png"
              alt="Paper"
              className="choice-img"
              id="paper"
              onClick={() => handleChoiceClick('paper')}
            />
            <img
              src="./public/black-scissors_2702.png"
              alt="Scissors"
              className="choice-img"
              id="scissors"
              onClick={() => handleChoiceClick('scissors')}
            />
          </div>
          <div>
            <h4 className="result" ref={resultDiv}>{myChoice}</h4>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-outline-danger" onClick={restartGame}>Restart</button>
          </div>
        {gameEnded&& <Second/>}
        </div>
      </div>
    </div>
  );

}export default  Body ;