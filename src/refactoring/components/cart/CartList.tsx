import CartItem from "./CartItem";
import { CartItem as Item } from "../../../types";

interface IProps {
  cart: Item[];
  getAppliedDiscount: (item: any) => number;
  updateQuantity: (productId: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartList = ({
  cart,
  getAppliedDiscount,
  updateQuantity,
  removeFromCart,
}: IProps) => {
  return (
    <div className="space-y-2">
      {cart.map((item) => {
        const appliedDiscount = getAppliedDiscount(item);
        return (
          <CartItem
            key={item.product.id}
            item={item}
            appliedDiscount={appliedDiscount}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
};

export default CartList;
