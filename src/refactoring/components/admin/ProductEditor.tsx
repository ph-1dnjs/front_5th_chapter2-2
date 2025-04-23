import { Discount, Product } from "../../../types";
import DiscountInput from "./DiscountInput";

interface Props {
  product: Product;
  editingProduct: Product;
  newDiscount: Discount;
  onUpdateName: (productId: string, newName: string) => void;
  onUpdatePrice: (productId: string, newPrice: number) => void;
  onUpdateStock: (productId: string, newStock: number) => void;
  onAddDiscount: (productId: string) => void;
  onRemoveDiscount: (productId: string, index: number) => void;
  onDiscountChange: (discount: Discount) => void;
  onEditComplete: () => void;
}

const ProductEditor = ({
  product,
  editingProduct,
  newDiscount,
  onUpdateName,
  onUpdatePrice,
  onUpdateStock,
  onAddDiscount,
  onRemoveDiscount,
  onDiscountChange,
  onEditComplete,
}: Props) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">상품명: </label>
        <input
          type="text"
          value={editingProduct.name}
          onChange={(e) => onUpdateName(product.id, e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">가격: </label>
        <input
          type="number"
          value={editingProduct.price}
          onChange={(e) => onUpdatePrice(product.id, parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">재고: </label>
        <input
          type="number"
          value={editingProduct.stock}
          onChange={(e) => onUpdateStock(product.id, parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-2">할인 정보</h4>
        {editingProduct.discounts.map((discount, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>
              {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
            </span>
            <button
              onClick={() => onRemoveDiscount(product.id, index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              삭제
            </button>
          </div>
        ))}
        <DiscountInput
          newDiscount={newDiscount}
          onChange={onDiscountChange}
          onAdd={() => onAddDiscount(product.id)}
        />
      </div>

      <button
        onClick={onEditComplete}
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mt-2"
      >
        수정 완료
      </button>
    </div>
  );
};

export default ProductEditor;
