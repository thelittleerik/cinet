import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
function Login({ user, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNavigateLogin = () => {
    navigate('/register');
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const loginUser = () => {
    // eslint-disable-next-line react/prop-types
    const isEmailValid = user.email !== "" && loginDetails.email !== "" && user.email === loginDetails.email;
    // eslint-disable-next-line react/prop-types
    const isPasswordValid = user.password !== "" && loginDetails.password !== "" && user.password === loginDetails.password;

    if (!loginDetails.email) {
      setEmailError("Email cannot be empty");
    } else {
      setEmailError("");
    }

    if (!loginDetails.password) {
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }

    if (isEmailValid && isPasswordValid) {
      setIsLoggedIn(true);
    } else {
      setPasswordError("Falsche E-Mail oder falsches Passwort.");
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        document.getElementById("login-button").click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column gap-3">
      <p className="title fw-bolder w-auto text-center my-5">Login</p>
      <div className="route-to-login m-auto text-center">
        <p className="link-to-login fs-1 text-center">
          Melde dich an, um fortzufahren.
        </p>
        <p className="fs-3">
          Noch kein Konto?{" "}
          <a className="text-black " onClick={handleNavigateLogin}>
            Registrieren
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-center flex-column gap-5">
        <div>
          <label
            htmlFor="email"
            className="d-flex flex-column fw-lighter text-uppercase fs-3 mb-3"
          >
            Email
          </label>
          <Input
            name="email"
            placeholder="Email"
            className="border border-dark fs-1 p-4 w-100"
            value={loginDetails.email}
            onChange={handleInputChange}
          />
          <p className="error-message">{emailError}</p>
        </div>
        <div className="d-flex flex-column">
          <label
            htmlFor="password"
            className="text-uppercase fs-3 fw-lighter mb-3"
          >
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-dark fs-1 p-4 w-100 mb-4"
            value={loginDetails.password}
            onChange={handleInputChange}
          />
          <p className="error-message">{passwordError}</p>
        </div>
        <Button
          text="Anmelden"
          id="login-button"
          className="w-100 m-auto"
          onClick={loginUser}
        />
      </div>
    </div>
  );
}

export default Login;
