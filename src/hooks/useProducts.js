import { useSelector } from "react-redux";

export function useProducts() {
  const { products: myProducts, input } = useSelector((state) => state);
  const { products } = myProducts;
  const { inputValue } = input;

  // product filter
  function handleFilterProduct() {
    return products.filter((product) => {
      if (inputValue === "") {
        return product;
      } else if (
        product.productTitle
          .toLowerCase()
          .startsWith(inputValue.trim().toLowerCase()) ||
        product.productTitle
          .toLowerCase()
          .includes(inputValue.trim().toLowerCase())
      ) {
        return product;
      }
    });
  }

  return {
    products,
    handleFilterProduct,
  };
}
