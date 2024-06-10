import Button from "./Button";
// eslint-disable-next-line react/prop-types
function Card({ title, src, alt, description, Text, onClick, withButton }) {
  return (
    <div
      className="card mb-4 shadow-sm"
      style={{ borderRadius: "0px", overflow: "hidden" }}
    >
      <img
        src={src}
        className="card-img-top"
        alt={alt}
        style={{
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      />
      <div className="card-body">
        <h4 className="card-title">
          <b>{title}</b>
        </h4>
        <p className="card-text">{description}</p>
        <div className="d-grid">
          {withButton && (
            <Button
              onClick={onClick}
              className="gamebutton"
              text={Text}
              style={{ color: "white" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
