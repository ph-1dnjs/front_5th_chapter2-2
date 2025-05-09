import { useState } from "react";
import { Product } from "../../types.ts";

export const useProduct = (initialProducts: Product[]) => {
  const [products, setProducts] = useState(initialProducts);

  const handleProductUpdate = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const handleProductAdd = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return {
    products: products,
    updateProduct: handleProductUpdate,
    addProduct: handleProductAdd,
  };
};
