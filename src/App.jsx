import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game";
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
    <>
      {isLoggedIn && <Header />}
      <div className="main-wrapper d-flex justify-content-center flex-column w-75 w-lg-50 mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute element={<Index />} />} />
            <Route
              path="/game"
              element={<ProtectedRoute element={<Game />} />}
            />
            <Route path="/map" element={<PublicRoute element={<Map />} />} />
            <Route
              path="/profil"
              element={<ProtectedRoute element={<Profil />} />}
            />
            <Route
              path="/shop"
              element={<ProtectedRoute element={<ShopPage />} />}
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
        </Router>
      </div>
      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
