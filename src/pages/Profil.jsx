import Input from "../components/Input";

// eslint-disable-next-line react/prop-types
function Profil({ user, setUser }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="point-container border-solid-1 my-4 text-center fs-1 w-100 m-auto p-5 border border-dark border-1">
        <strong>
          Du hast <br />
          <p style={{ fontSize: "34px" }}>
            {
              // eslint-disable-next-line react/prop-types
              user.points
            }
          </p>
          Punkte
        </strong>
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
            // eslint-disable-next-line react/prop-types
            value={user.username}
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
            // eslint-disable-next-line react/prop-types
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex flex-column">
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
            // eslint-disable-next-line react/prop-types
            value={user.password}
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
            // eslint-disable-next-line react/prop-types
            value={user.birthdate}
            onChange={handleInputChange}
            className="p-4 w-100 fs-1"
          />
        </div>
      </div>
    </>
  );
}

export default Profil;
