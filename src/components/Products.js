import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { useProducts } from "../hooks/useProducts";
import Product from "./Product";

function Products() {
  const { inputValue } = useInput();
  const { handleFilterProduct } = useProducts();

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
