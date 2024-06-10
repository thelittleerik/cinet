import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

function Index() {
 
  const navigate = useNavigate();

  const toGamePage = () => {
    // route to Games
    navigate("/gamepage");
  };

  const toGame = () => {
    // route to Games
    navigate("/game");
  };

  const toShop = () => {
    // route to Games
    navigate("/shop");
  };

  return (<>
  <br /><br />
  <img src="public/kino.jpg" alt="Picture of a Cinema" />
  <br />
          <Card
            title="Spiel des Tages"
            src="public\assets\icons\flappybird.png"
            alt="First Card Image"
            description="Flappy Bird"
            Text= "PLAY"
            withButton={true}
            onClick={toGamePage}
          />
            <Card
            title="Beliebte Spiele"
            src="public/assets/icons/Poki-Games.webp"
            alt="First Card Image"
            description="Earn points by playing this games!"
            Text= "VIEW"
            withButton={true}
            onClick={toGame}
          />
            <Card
            title="Punkte Einlösen"
            src="public/assets/icons/shop-view.png"
            alt="First Card Image"
            description="Use your points in the shop"
            Text= "SHOP"
            withButton={true}
            onClick={toShop}
          />
            <Card
            title="So funktioniert Cinet"
            src="/public/assets/icons/logo.png"
            alt="First Card Image"
            description="Cinet is a new cinema concept, where you can earn paynts by playing games. Whith the points you can buy cool things like popcorn or tickets."
          />
  </>);
}
export default Index;
