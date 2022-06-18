import styled from "styled-components";
import { useShop } from "../context/shoppingContext";
import Product from "./Product";

function Products() {
  const { handleFilterProduct, inputValue } = useShop();
  return (
    <>
      {handleFilterProduct().length === 0 && (
        <div>
          <p>
            No more product listed with this{" "}
            <strong> {`${inputValue}`} </strong>
            keyword!
          </p>
        </div>
      )}
      <ProductsGrid>
        {handleFilterProduct().map((product) => (
          <Product {...product} key={product.productId} />
        ))}
      </ProductsGrid>
    </>
  );
}

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2em;
`;

export default Products;
