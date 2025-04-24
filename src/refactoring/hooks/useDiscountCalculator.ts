import { useMemo } from "react";
import { CartItem, Coupon } from "../../types";
import { calculateCartTotal } from "../models/cart";

export const useDiscountCalculator = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  const result = useMemo(() => {
    return calculateCartTotal(cart, selectedCoupon);
  }, [cart, selectedCoupon]);

  return result;
};
