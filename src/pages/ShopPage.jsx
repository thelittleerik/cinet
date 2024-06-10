import ShopItem from "../components/ShopItem";

// eslint-disable-next-line react/prop-types
function ShopPage({ user, setUser }) {
  return (
    <>
      <div>
        <ShopItem user={user} setUser={setUser} cost="100" name="Popcorn" />
        <ShopItem user={user} setUser={setUser} cost="500" name="Kino Gutschein" />
        <ShopItem user={user} setUser={setUser} cost="70" name="Getränk" />
        <ShopItem user={user} setUser={setUser} cost="150" name="Snack nach Auswahl" />
      </div>
    </>
  );
}
export default ShopPage;
