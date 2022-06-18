import { useShop } from "../context/shoppingContext";

function Favourite() {
  const { favourite } = useShop();
  return (
    <>
      {favourite.map(({ productTitle }) => (
        <h2> {productTitle} </h2>
      ))}
    </>
  );
}

export default Favourite;
