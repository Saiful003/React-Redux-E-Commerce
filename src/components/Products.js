import React from "react";
import { useShop } from "../context/shoppingContext";
import Product from "./Product";
import styles from "../styles/Products.module.css";

function Products() {
  const { handleFilterProduct, inputValue, categoryName } = useShop();

  return (
    <div>
      <h2 className={styles.category__name}>
        {categoryName || "All Products"}
      </h2>
      <div className={styles.product__wrapper}>
        {handleFilterProduct().length === 0 && (
          <div className={styles.toast}>
            <p>
              No more product with this
              <strong> {inputValue || categoryName} </strong> keyword in{" "}
              {categoryName} category.
            </p>
          </div>
        )}
        {handleFilterProduct().map((product) => (
          <Product key={product.productId} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
