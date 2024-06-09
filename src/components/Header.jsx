import { useNavigate } from "react-router-dom";


function Header() {
const navigate = useNavigate();

const toHome = () => {
  // route to Home
  navigate("/");
};

const toMap = () => {
  // route to Map
  navigate("/map");
};

const toProfil = () => {
  // route to Profil
  navigate("/profil");
};

const toGame = () => {
  // route to Games
  navigate("/game");
};

const toShop = () => {
  // route to Shop
  navigate("/shop");
};

  return (
  <>
  <nav className="navbar fixed-top">
  <div className="container-fluid">
    <div  className="col-10">
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CINET</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={toHome}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={toMap}>Map</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profil
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={toGame}>Games</a></li>
              <li><a className="dropdown-item" onClick={toShop}>Shop</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" onClick={toProfil}>View Profil</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>
)
}
export default Header;