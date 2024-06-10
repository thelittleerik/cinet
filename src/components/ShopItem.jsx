// eslint-disable-next-line react/prop-types
function ShopItem({ cost, name, user, setUser }) {
  const handlePurchase = () => {
    // eslint-disable-next-line react/prop-types
    if (user.points >= cost) {
      setUser((prevUser) => ({
        ...prevUser,
        points: prevUser.points - cost,
      }));
      alert(`You have purchased ${name} for ${cost} points!`);
    } else {
      alert(`You don't have enough points to purchase ${name}.`);
    }
  };

  return (
    <>
      <div
        onClick={handlePurchase}
        style={{ cursor: "pointer" }}
        className="point-container border-solid-1 my-4 text-center fs-1 w-100 m-auto p-5 border border-dark border-1"
      >
        <strong>
          {name} <br />
          <p style={{ fontSize: "34px" }}>{cost}</p>
          Punkte
        </strong>
      </div>
    </>
  );
}

export default ShopItem;
