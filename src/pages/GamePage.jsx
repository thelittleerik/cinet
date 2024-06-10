import React, { useState, useEffect } from 'react';
import './GamePage.css';
import birdIcon from './bird.png'; // Importiere das Icon für den Vogel
 
const GRAVITY = 3; // Erhöhte Schwerkraft
const JUMP = -30; // Erhöhter Sprung
const PIPE_WIDTH = 80; // Breitere Säulen
const INITIAL_PIPE_GAP = 250; // Startabstand zwischen den Säulen
const PIPE_SPEED = 6; // Geschwindigkeit der Säulen
 
function GamePage() {
  const [birdPosition, setBirdPosition] = useState(250);
  const [pipeGap, setPipeGap] = useState(INITIAL_PIPE_GAP);
  const [pipes, setPipes] = useState(generateInitialPipes(5, INITIAL_PIPE_GAP));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
 
  function generateInitialPipes(numberOfPipes, gap) {
    let initialPipes = [];
    for (let i = 0; i < numberOfPipes; i++) {
      initialPipes.push({
        left: 500 + i * 300, // Abstand zwischen den Säulen
        height: Math.floor(Math.random() * (400 - gap)) + 100,
      });
    }
    return initialPipes;
  }
 
  useEffect(() => {
    let timeId;
    if (!gameOver && birdPosition < 500) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 24);
    }
 
    return () => {
      clearInterval(timeId);
    };
  }, [birdPosition, gameOver]);
 
  useEffect(() => {
    let pipeId;
    if (!gameOver) {
      pipeId = setInterval(() => {
        setPipes((pipes) =>
          pipes.map(pipe => ({
            ...pipe,
            left: pipe.left - PIPE_SPEED,
          }))
        );
 
        setPipes((pipes) => {
          if (pipes[0].left < -PIPE_WIDTH) {
            const newPipes = pipes.slice(1);
            newPipes.push({
              left: newPipes[newPipes.length - 1].left + 300,
              height: Math.floor(Math.random() * (400 - pipeGap)) + 100,
            });
            setScore((score) => score + 1);
            return newPipes;
          }
          return pipes;
        });
      }, 24);
 
      return () => {
        clearInterval(pipeId);
      };
    }
  }, [gameOver, pipeGap]);
 
  useEffect(() => {
    const handleCollision = () => {
      for (let i = 0; i < pipes.length; i++) {
        const pipe = pipes[i];
        const pipeTop = pipe.height;
        const pipeBottom = pipe.height + pipeGap;
        const birdTop = birdPosition;
        const birdBottom = birdPosition + 40;
 
        if (
          pipe.left >= 100 - PIPE_WIDTH &&
          pipe.left <= 100 + 40 &&
          (birdTop <= pipeTop || birdBottom >= pipeBottom)
        ) {
          setGameOver(true);
          return;
        }
      }
    };
 
    handleCollision();
  }, [birdPosition, pipes, pipeGap]);
 
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        handleJump();
      }
    };
 
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameOver, birdPosition]);
 
  useEffect(() => {
    if (score >= 30) {
      setPipeGap(100); // Sehr schwer
    } else if (score >= 15) {
      setPipeGap(150); // Schwer
    }
  }, [score]);
 
  const handleJump = () => {
    if (!gameOver && birdPosition > 0) {
      setBirdPosition((birdPosition) => birdPosition + JUMP);
    }
  };
 
  const handleRestart = () => {
    setBirdPosition(250);
    setPipeGap(INITIAL_PIPE_GAP);
    setPipes(generateInitialPipes(5, INITIAL_PIPE_GAP));
    setScore(0);
    setGameOver(false);
  };
 
  return (
    <div className="game-container">
      <div className="game-area">
        <img
          src={birdIcon}
          alt="bird"
          className="bird"
          style={{ top: birdPosition, left: '100px' }} // Fixiere die linke Position des Vogels
        />
        {pipes.map((pipe, index) => (
          <React.Fragment key={index}>
            <div
              className="pipe"
              style={{
                height: pipe.height,
                left: pipe.left,
                width: PIPE_WIDTH,
              }}
            />
            <div
              className="pipe"
              style={{
                height: 500 - pipe.height - pipeGap,
                left: pipe.left,
                top: pipe.height + pipeGap,
                width: PIPE_WIDTH,
              }}
            />
          </React.Fragment>
        ))}
        <span className="score">{score}</span>
        {gameOver && (
          <div className="game-over">
            Game Over
            <button onClick={handleRestart}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}
 
export default GamePage;