import { useFavourite } from "../hooks/useFavourite";

function Favourite() {
  const { favourite } = useFavourite();
  return (
    <>
      {favourite.map(({ productTitle }) => (
        <h2> {productTitle} </h2>
      ))}
    </>
  );
}

export default Favourite;
