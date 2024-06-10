import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game";
import GamePage from "./pages/GamePage";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: "",
    points: 0,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };
  // eslint-disable-next-line react/prop-types
  const PublicRoute = ({ element }) => {
    return !isLoggedIn ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <>
        {isLoggedIn && <Header />}
        <div className="logo-container w-100 justify-content-center d-flex mt-5">
          <img src="/public/assets/icons/logo.png" width="150"></img>
        </div>
        <div className="main-wrapper d-flex justify-content-center flex-column w-75 w-lg-50 mx-auto">
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<Index />} />} />
            <Route
              path="/game"
              element={<ProtectedRoute element={<Game />} />}
            />
            <Route
              path="/gamepage"
              element={
                <ProtectedRoute
                  element={<GamePage user={user} setUser={setUser} />}
                />
              }
            />
            <Route path="/map" element={<ProtectedRoute element={<Map />} />} />
            <Route
              path="/profil"
              element={
                <ProtectedRoute
                  element={<Profil user={user} setUser={setUser} />}
                />
              }
            />
            <Route
              path="/shop"
              element={
                <ProtectedRoute
                  element={<ShopPage user={user} setUser={setUser} />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  element={<Login user={user} setIsLoggedIn={setIsLoggedIn} />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  element={
                    <Register setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
                  }
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {isLoggedIn && <Footer />}
      </>
    </Router>
  );
}

export default App;
