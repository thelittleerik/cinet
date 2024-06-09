import React from 'react';
import Card from '../components/Card';

function Game() {
  const handleButtonClick = () => {
    alert('Spiel gestartet!');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Card
            title="Cinema Run"
            src="public\assets\icons\tempellrun.png"
            alt="First Card Image"
            description="This is the description for Game 1."
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Flappy Cinema"
            src="public\assets\icons\flappybird.png"
            alt="Second Card Image"
            description="This is the description for Game 2."
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Cinema Surfer"
            src="public\assets\icons\subwaysurfer.png"
            alt="Third Card Image"
            description="This is the description for Game 3."
            onButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
