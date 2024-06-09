import Card from "../components/Card";

function Index() {
  return (<>
  <br /><br />
  <img src="public/kino.jpg" alt="Picture of a Cinema" />
  <br />
          <Card
            title="Spiel des Tages"
            src="public\assets\icons\tempellrun.png"
            alt="First Card Image"
            description="Flappy Bird"
            
          />
            <Card
            title="Beliebte Spiele"
            src="public\assets\icons\tempellrun.png"
            alt="First Card Image"
            description="Earn points by playing this games!"
            
          />
            <Card
            title="Punkte Einlösen"
            src="public\assets\icons\tempellrun.png"
            alt="First Card Image"
            description="Use your points in the shop"
            
          />
            <Card
            title="So funktioniert Cinet"
            src="/public/assets/icons/logo.png"
            alt="First Card Image"
            description="This is the description for Game 1."
          />
  </>);
}
export default Index;
