import { CartItem } from "../../../types";
import CartList from "./CartList";

interface IProps {
  cart: CartItem[];
  getAppliedDiscount: (item: any) => number;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartSummary = ({
  cart,
  getAppliedDiscount,
  updateQuantity,
  removeFromCart,
}: IProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">장바구니 내역</h2>
      <CartList
        cart={cart}
        getAppliedDiscount={getAppliedDiscount}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CartSummary;
