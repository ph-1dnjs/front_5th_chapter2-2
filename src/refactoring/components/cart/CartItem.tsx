import { CartItem as Item } from "../../../types";
import CartActions from "./CartActions";

interface IProps {
  item: Item;
  appliedDiscount: number;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartItem = ({
  item,
  appliedDiscount,
  updateQuantity,
  removeFromCart,
}: IProps) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      <div>
        <span className="font-semibold">{item.product.name}</span>
        <br />
        <span className="text-sm text-gray-600">
          {item.product.price}원 x {item.quantity}
          {appliedDiscount > 0 && (
            <span className="text-green-600 ml-1">
              ({(appliedDiscount * 100).toFixed(0)}% 할인 적용)
            </span>
          )}
        </span>
      </div>
      <CartActions
        item={item}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CartItem;
