import { Discount, Product } from "../../../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  getRemainingStock: (product: Product) => number;
  getMaxDiscount: (discounts: Discount[]) => number;
  addToCart: (product: Product) => void;
}

const ProductList = ({
  products,
  getRemainingStock,
  getMaxDiscount,
  addToCart,
}: ProductListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">상품 목록</h2>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            remainingStock={getRemainingStock(product)}
            getMaxDiscount={getMaxDiscount}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
