import Button from "../components/Button";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Register({ setUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: "",
  });

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerUser = () => {
    // Assuming successful registration
    setUser(formData);
    navigate("/login");
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        document.getElementById("register-button").click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center flex-column gap-3">
        <p className="title fw-bolder w-auto text-center my-5">
          Account erstellen
        </p>
        <div className="route-to-login m-auto">
          <p className="link-to-login fs-1 text-center">
            Hast du schon einen Account? <br />{" "}
            <a
              onClick={handleNavigateLogin}
              className="text-black text-decoration-underline"
            >
              Hier anmelden
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-center flex-column gap-4">
          <div>
            <label
              htmlFor="username"
              className="text-uppercase d-flex flex-column fw-lighter fs-3 mb-3"
            >
              name
            </label>
            <Input
              name="username"
              placeholder="Username"
              className="border border-dark fs-1 p-4 w-100"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="d-flex flex-column fw-lighter text-uppercase fs-3 mb-3"
            >
              email
            </label>
            <Input
              name="email"
              placeholder="Email"
              className="border border-dark fs-1 p-4 w-100"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="d-flex flex-column ">
            <label
              className="text-uppercase fs-3 fw-lighter mb-3"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-dark fs-1 p-4 w-100"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="birthdate"
              className="text-uppercase fw-lighter fs-3 text-left mb-3"
            >
              geburtsdatum
            </label>
            <Input
              type="date"
              name="birthdate"
              placeholder="Auswählen"
              value={formData.birthdate}
              onChange={handleInputChange}
              className="p-4 w-100 fs-1"
            ></Input>
          </div>

          <Button
            text="Account erstellen"
            className="w-100 m-auto"
            id="register-button"
            autofocus
            onClick={registerUser}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default Register;
