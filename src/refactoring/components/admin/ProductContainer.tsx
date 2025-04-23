import { Product } from "../../../types";
import ProductEditor from "./ProductEditor";

interface IProps {
  products: Product[];
  openProductIds: Set<string>;
  editingProduct: Product | null;
  newDiscount: { quantity: number; rate: number };
  toggleProductAccordion: (id: string) => void;
  handleEditProduct: (product: Product) => void;
  handleProductNameUpdate: (id: string, name: string) => void;
  handlePriceUpdate: (id: string, price: number) => void;
  handleStockUpdate: (id: string, stock: number) => void;
  handleAddDiscount: (id: string) => void;
  handleRemoveDiscount: (id: string, index: number) => void;
  handleEditComplete: () => void;
  setNewDiscount: (discount: { quantity: number; rate: number }) => void;
}

const ProductContainer = ({
  products,
  openProductIds,
  editingProduct,
  newDiscount,
  toggleProductAccordion,
  handleEditProduct,
  handleProductNameUpdate,
  handlePriceUpdate,
  handleStockUpdate,
  handleAddDiscount,
  handleRemoveDiscount,
  handleEditComplete,
  setNewDiscount,
}: IProps) => {
  return (
    <div className="space-y-2">
      {products.map((product, index) => (
        <div
          key={product.id}
          data-testid={`product-${index + 1}`}
          className="bg-white p-4 rounded shadow"
        >
          <button
            data-testid="toggle-button"
            onClick={() => toggleProductAccordion(product.id)}
            className="w-full text-left font-semibold"
          >
            {product.name} - {product.price}원 (재고: {product.stock})
          </button>
          {openProductIds.has(product.id) && (
            <div className="mt-2">
              {editingProduct && editingProduct.id === product.id ? (
                <ProductEditor
                  product={product}
                  editingProduct={editingProduct}
                  newDiscount={newDiscount}
                  onUpdateName={handleProductNameUpdate}
                  onUpdatePrice={handlePriceUpdate}
                  onUpdateStock={handleStockUpdate}
                  onAddDiscount={handleAddDiscount}
                  onRemoveDiscount={handleRemoveDiscount}
                  onDiscountChange={setNewDiscount}
                  onEditComplete={handleEditComplete}
                />
              ) : (
                <div>
                  {product.discounts.map((discount, index) => (
                    <div key={index} className="mb-2">
                      <span>
                        {discount.quantity}개 이상 구매 시 {discount.rate * 100}
                        % 할인
                      </span>
                    </div>
                  ))}
                  <button
                    data-testid="modify-button"
                    onClick={() => handleEditProduct(product)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2"
                  >
                    수정
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
